const express = require("express");
const router = express.Router();
const Resources = require("./helpers");

router.get("/", (req, res) => {
  Resources.getResources()
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(err => {
      res.status(500).json({ error: "Server could not get list of resources" });
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Resources.getByResourceID(id)
    .then(resource => {
      res.status(200).json(resource);
    })
    .catch(error => {
      res.status(500).json({ error: "Server could not get resource" });
    });
});

router.post("/", (req, res) => {
  const resource = req.body;
  Resources.addResource(resource)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(err => {
      res.status(500).json({ error: "Server did it" });
    });
});

module.exports = router;
