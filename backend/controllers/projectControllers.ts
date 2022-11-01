import { Response, Request } from "express";

const getProjects = (req: Request, res: Response) => {
  res.status(200).json({ message: "Get All Projects" });
};

const createProject = (req: Request, res: Response) => {
  if (!req.body.title) {
    res.status(400);
    // .json({ message: "Title is required" });
    throw new Error("Title is required"); //another way
  }
  res.status(200).json({ message: "Create a Project" });
};

const getProject = (req: Request, res: Response) => {
  res.json({ message: `Get Project ${req.params.id}` });
};

const updateProject = (req: Request, res: Response) => {
  res.json({ message: `Delete Project ${req.params.id}` });
};

const deleteProject = (req: Request, res: Response) => {
  res.json({ message: `Update Project ${req.params.id}` });
};

module.exports = {
  getProjects,
  createProject,
  getProject,
  updateProject,
  deleteProject,
};
