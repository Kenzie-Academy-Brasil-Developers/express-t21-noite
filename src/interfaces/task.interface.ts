export interface ITask{
    id: number;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt?: Date;
}

export type TTaskCreateData = Pick<ITask, "title" | "content">;

export type TTaskUpdateData = Partial<TTaskCreateData>;