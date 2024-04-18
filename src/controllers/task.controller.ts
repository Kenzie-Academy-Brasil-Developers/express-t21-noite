import { Request, Response } from "express";
import { createTask, getOneTask, getTasks, removeTask, updateTask } from "../services/task.service";

const create = (request: Request, response: Response) => {
    const task = createTask(request.body);

    return response.status(201).json(task);
}

const getMany = (request: Request, response: Response) => {
    const tasks = getTasks();

    return response.status(200).json(tasks);
}

const getOne = (request: Request, response: Response) => {
    const task = getOneTask(Number(request.params.id));

    return response.status(200).json(task);
}

const remove = (request: Request, response: Response) => {
    removeTask(Number(request.params.id));

    return response.status(204).json();
}

const update = (request: Request, response: Response) => {
    const task = updateTask(Number(request.params.id), request.body);

    return response.status(200).json(task);
}

export const taskControllers = { create, getMany, getOne, remove, update };