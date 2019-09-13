const db = require("../data/db-config");
module.exports = {
  getProjects,
  getProjectByID,
  addProject
};

function getProjects() {
  return db("projects").then(projects => {
    return projects.map(project => {
      project.completed = project.completed ? true : false;
      return project;
    });
  });
}

function getProjectByID(id) {
  return db("projects")
    .where({ id })
    .first();
}

function addProject(project) {
  return db("projects")
    .insert(project)
    .then(([id]) => {
      return getProjectByID(id);
    });
}
