export class NewTodolistDTO {
    author: string;
    task: string;
}

export class UpdateTodolistDTO {
    uuid: string;
    task: string;
    done: boolean;
}