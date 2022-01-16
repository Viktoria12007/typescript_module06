type Todo = {
    title: string
    description: string
    completed: boolean
}

type TodoPreviewWithBuiltIn = Omit<Todo, 'description' | 'title'>;

const todoWithBuiltIn: TodoPreviewWithBuiltIn = {
    completed: false,
};

export type MyOmit;

type TodoPreview = MyOmit<Todo, 'description' | 'title'>;

const todo: TodoPreview = {
    completed: false,
};
