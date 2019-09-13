const express = require("express");
const router = express.Router();
const Resources = require("./helpers");

router.get("/resources", (req, res) => {
  Resources.getResources()
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(err => {
      res.status(500).json({ error: "Server could not get list of resources" });
    });
});
