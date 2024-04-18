import express, { json } from "express";
import { taskRoutes } from "./routes/task.routes";

export const app = express();

app.use(json());

app.use("/tasks", taskRoutes);

