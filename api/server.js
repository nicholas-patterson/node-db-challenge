const express = require("express");
const server = express();
const resourceRouter = require("../resources/resourceRouter");
const projectRouter = require("../projects/projectRouter");
const tasksRouter = require("../tasks/tasksRouter");

server.use(express.json());
server.use("/resource", resourceRouter);
server.use("/projects", projectRouter);
server.use("/tasks", tasksRouter);

module.exports = server;
