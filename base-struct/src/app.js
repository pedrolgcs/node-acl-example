import express, { json } from "express";
import routes from "./routes";

const app = express();

// midlewares
app.use(express.json());

// routes
app.use(routes);

/* run aplication */
const port = 3333;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
