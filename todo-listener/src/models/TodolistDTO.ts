export class NewTodolistDTO {
    author: string;
    task: string;
}

export class InsertNewTodolistDTO {
    public author: string;
    public task: string;
    public uuid: string;
    public done: boolean;
    public deleted: boolean;
    constructor(todo: NewTodolistDTO, uuid: string) {
        this.author = todo.author;
        this.task = todo.task;
        this.uuid = uuid;
        this.done = false;
        this.deleted = false;
    }
}

export class UpdateTodolistDTO {
    uuid: string;
    task: string;
    done: boolean;
}

export class DeleteTodolistDTO {
    uuid: string;
}