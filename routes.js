const routes = require("express").Router();

const userController = require("./controllers/userController");

routes.post("/register", userController.register);
routes.post("/authenticate", userController.authenticate);

module.exports = routes;
