import express, { json } from "express";
import acl from "express-acl";

import routes from "./routes";
import { config, responseObject } from "./config/acl";

const app = express();

// midlewares
app.use(express.json());

// routes
app.use(routes);
acl.config(config, responseObject);

/* run aplication */
const port = 3333;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
