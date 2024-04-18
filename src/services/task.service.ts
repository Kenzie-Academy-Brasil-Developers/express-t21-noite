import { generateId, taskDatabase } from "../database/database";
import { ITask, TTaskCreateData } from "../interfaces/task.interface";

// Regra de negócio da aplicação

export function createTask(data: TTaskCreateData) {
   const now = new Date();

   const task: ITask = {
      id: generateId(),
      title: data.title,
      content: data.content,
      createdAt: now,
   };

   taskDatabase.push(task);

   return task;
}

export function getTasks() {
   return taskDatabase;
}

export function getOneTask(id: number) {
   const task = taskDatabase.find((task) => task.id === id);

   if (!task) {
      throw new Error("Task not found.");
   }

   return task;
}

export function removeTask(id: number) {
   const index = taskDatabase.findIndex((task) => task.id === id);

   if (index === -1) {
      throw new Error("Task not found.");
   }

   taskDatabase.splice(index, 1);
}

export function updateTask(id: number, data: TTaskCreateData) {
   const currentTask = taskDatabase.find((task) => task.id === id);

   if (!currentTask) {
      throw new Error("Task not found.");
   }

   const now = new Date();

   const updateTask: ITask = {
      ...currentTask,
      ...data,
      updatedAt: now,
   };

   const index = taskDatabase.findIndex((task) => task.id === id);

   taskDatabase.splice(index, 1, updateTask);

   return updateTask;
}
