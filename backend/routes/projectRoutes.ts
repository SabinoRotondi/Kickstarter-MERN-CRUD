const express = require("express");
const router = express.Router();

const {
  getProjects,
  createProject,
  getProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectControllers");

/* first way 
 router.route("/").get(getProject).post(createProject);
 router.route("/:id").get(getProject).put(updateProject).delete(deleteProject);
*/

//* second way
router.get("/", getProjects);
router.post("/", createProject);
router.get("/:id", getProject);
router.put("/:id", deleteProject);
router.delete("/:id", updateProject);

module.exports = router;
