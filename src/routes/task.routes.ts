import { Router } from "express";
import { taskControllers } from "../controllers/task.controller";

export const taskRoutes = Router();

taskRoutes.post("/", taskControllers.create);

taskRoutes.get("/", taskControllers.getMany);

taskRoutes.get("/:id", taskControllers.getOne);

taskRoutes.delete("/:id", taskControllers.remove);

taskRoutes.patch("/:id", taskControllers.update);