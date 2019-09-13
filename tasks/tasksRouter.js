const express = require("express");
const router = express.Router();
const Tasks = require("./tasks-helpers");

router.get("/", (req, res) => {
  Tasks.getTask()

    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(error => {
      res.status(500).json({ error: "Server could not get tasks" });
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Tasks.getTaskByID(id)
    .then(task => {
      res.status(200).json(task);
    })
    .catch(error => {
      res.status(500).json({ error: "Server could not get task" });
    });
});

router.post("/:id/tasks", (req, res) => {
  let task = req.body;
  task.project_id = req.params.id;

  Tasks.addTask(task)
    .then(task => {
      res.status(200).json(task);
    })
    .catch(error => {
      res.status(500).json({ error: "Server could not post task" });
    });
});

router.get("/taskslist/123", (req, res) => {
  Tasks.list()
    .then(tasks => {
      console.log("TASKS", tasks);
      res.status(200).json(tasks);
    })
    .catch(err => {
      res.status(500).json({ error: "Server could not get task" });
    });
});

module.exports = router;
