const routes = require("express").Router();
const auth = require("./middlewares/auth");

const bookController = require("./controllers/bookController");
const userController = require("./controllers/userController");

routes.post("/register", userController.register);
routes.post("/authenticate", userController.authenticate);
routes.get("/users", auth, userController.index);
routes.get("/user/:id", auth, userController.show);
routes.put("/user/:id", auth, userController.update);
routes.delete("/user/:id", auth, userController.destroy);

routes.get("/books", auth, bookController.index);
routes.get("/books/:id", auth, bookController.show);
routes.post("/books", auth, bookController.store);
routes.put("/books/:id", auth, bookController.update);
routes.delete("/books/:id", auth, bookController.destroy);

module.exports = routes;
