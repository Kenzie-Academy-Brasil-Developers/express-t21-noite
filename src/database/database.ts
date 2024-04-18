import { ITask } from "../interfaces/task.interface";

export const taskDatabase: ITask[] = [];

let id = 0;

export function generateId(){
    id++;

    return id;
}