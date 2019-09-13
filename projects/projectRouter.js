const express = require("express");
const router = express.Router();
const Project = require("./project-helpers");

router.get("/", (req, res) => {
  Project.getProjects()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json({ error: "Server could not get projects" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Project.getProjectByID(id)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({ error: "Server could not get project" });
    });
});

router.post("/", (req, res) => {
  const project = req.body;

  Project.addProject(project)
    .then(newProject => {
      res.status(200).json(newProject);
    })
    .catch(errr => {
      res.status(500).json({ error: "Server could not post project" });
    });
});

module.exports = router;
