const mongoose = require("mongoose");
import { Response, Request } from "express";
const asyncHandler = require("express-async-handler");
const Project = require("../models/projectModel");

const getProjects = asyncHandler(async (req: Request, res: Response) => {
  const projects = await Project.find();
  res.status(200).json(projects);
});

const createProject = asyncHandler(async (req: Request, res: Response) => {
  if (!req.body.title) {
    res.status(400);
    // .json({ message: "Title is required" });
    throw new Error("Title is required"); //another way
  }
  const project = await Project.create(req.body);
  if (!project) {
    res.status(400);
    throw new Error("Project not created");
  }
  res.status(201).json(project);
});

const getProject = asyncHandler(async (req: Request, res: Response) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400);
    throw new Error(`${req.params.id} is not a valid id`);
  }
  const project = await Project.findById(req.params.id);
  if (!project) {
    res.status(404);
    throw new Error("Project not found");
  }
  res.status(200).json(project);
});

const updateProject = asyncHandler(async (req: Request, res: Response) => {
  if (!req.body.title) {
    res.status(400);
    throw new Error("Title is required");
  }
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400);
    throw new Error(`${req.params.id} is not a valid id`);
  }

  const project = await Project.findByIdAndUpdate(req.params.id, req.body);
  if (!project) {
    res.status(404);
    throw new Error("Project not found");
  }
  res.json(project);
});

const deleteProject = asyncHandler(async (req: Request, res: Response) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400);
    throw new Error(`${req.params.id} is not a valid id`);
  }
  const project = await Project.findByIdAndDelete(req.params.id);
  if (!project) {
    res.status(404);
    throw new Error("Project not found");
  }
  res.status(200).json({
    message: `Project ${req.params.id} deleted`,
    project: project,
  });
});

module.exports = {
  getProjects,
  createProject,
  getProject,
  updateProject,
  deleteProject,
};
