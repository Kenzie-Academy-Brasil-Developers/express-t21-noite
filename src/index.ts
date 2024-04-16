import express, { Request, Response, json } from "express";

const app = express();

// O Express vai ser capaz de receber e processar JSON
app.use(json());

/*
// Criação rotas
app.get("/", (request, response) => {
    return response.json({ message: "Olá mundo!"});
});

app.get("/task/:taskId/:name", (request, response) => {
    // Params sempre recebe dados do tipo string
    // Parâmetros obrigatório - identificadores e slug
    //return response.json(request.params);
    // Query Param
    // endereco?name=Alex&age=33
    // Parâmetros opcionais - filtro, busca
    return response.status(201).json(request.params);
})

app.post("/task", (request, response) => {
    // Tudo o que vem de fora da minha aplicação
    // TUDO O QUE?

    // Chaves relacionadas a criação de um recurso ou atualização de recurso
    console.log(request.body);

    // Corpo da requisição
    return response.json(request.body);
});
*/

interface ITask{
    id: number;
    title: string;
    content: string;
    createdAt: Date;
}

export const taskDatabase: ITask[] = [];
let id = 1;

function createTask (request: Request, response: Response) {
    const now = new Date();

    const task: ITask = {
        id,
        title: request.body.title,
        content: request.body.content,
        createdAt: now
    }

    taskDatabase.push(task);

    id++;

    return response.status(201).json(task);
}

app.post("/task", createTask);

app.get("/task", (request, response) => {
    return response.status(200).json(taskDatabase);
});

app.get("/task/:id", (request, response) => {
    const task = taskDatabase.find(task => task.id === Number(request.params.id));

    if(!task){
        return response.status(404).json({ message: "Task not found."});
    }

    return response.status(200).json(task);
});

app.delete("/task/:id", (request, response) => {
    const index = taskDatabase.findIndex(task => task.id === Number(request.params.id));

    if(index === -1){
        return response.status(404).json({ message: "Task not found."});
    }

    taskDatabase.splice(index, 1);

    return response.status(204).json();
});

// Entrada (requisição), etapas (lógica da rota), saída (resposta)


// Servidor local (iniciar a aplicação localmente)

app.listen(3001, () => {
    console.log("API successfully started at port 3001");
});