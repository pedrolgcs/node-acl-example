import { Router } from "express";
import acl from "express-acl";

// midlewares
import auth from "./app/middlewares/auth";

// controllers
import SessionController from "./app/controllers/SessionController";

// inicialize
const routes = new Router();
const sessionController = new SessionController();

/* Public routes */

routes.get("/", (request, response) => {
  return response.json({ message: "Hello from API" });
});

routes.post("/sessions", sessionController.create);

// apply acl
routes.use(auth);
routes.use(acl.authorize);

/* Private routes */

routes.get("/dashboard", (request, response) => {
  return response.json({ message: "Admin dashboard" });
});

routes.get("/notices", (request, response) => {
  return response.json({ message: "List notices" });
});
routes.post("/notices", (request, response) => {
  return response.json({ message: "Create a new notice" });
});
routes.put("/notices/:notice_id", (request, response) => {
  return response.json({ message: "Update notice" });
});

routes.get("/profile", (request, response) => {
  return response.json({ message: "Your profile page" });
});

export default routes;
