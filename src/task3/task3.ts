type Todo = {
    title: string
    description: string
    completed: boolean
};

export type MyReadonly<T, K> = Readonly<Pick<T, K>> & Omit<T, K>;

const todo: MyReadonly<Todo, 'title' | 'description'> = {
    title: "Hey",
    description: "foobar",
    completed: false,
}

// comment lines below when running tests
todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
todo.completed = true // OK
