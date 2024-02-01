type Todo = {
    title: string
    description: string
    completed: boolean
}

type TodoPreviewWithBuiltIn = Omit<Todo, 'description' | 'title'>;

const todoWithBuiltIn: TodoPreviewWithBuiltIn = {
    completed: false,
};

console.log(todoWithBuiltIn);

export type MyOmit<T, U> = Pick<T, Exclude<keyof T, U>>;

type TodoPreview = MyOmit<Todo, 'description' | 'title'>;

const todo: TodoPreview = {
    completed: false,
};

console.log(todo);
