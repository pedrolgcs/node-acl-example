import { Router } from "express";

// midlewares
import auth from "./app/middlewares/auth";

// controllers
import SessionController from "./app/controllers/SessionController";

// inicialize
const routes = new Router();
const sessionController = new SessionController();

routes.get("/", (request, response) => {
  return response.json({ message: "Hello from API" });
});

// session
routes.post("/sessions", sessionController.create);

routes.use(auth);

// admin
routes.get("/dashboard", (request, response) => {
  return response.json({ message: "This is a admin page" });
});

// moderator
routes.get("/notices", (request, response) => {
  return response.json({ message: "List notices" });
});
routes.post("/notices", (request, response) => {
  return response.json({ message: "Create a new notice" });
});

// profile
routes.get("/profile", (request, response) => {
  return response.json({ message: "Your profile page" });
});

export default routes;
