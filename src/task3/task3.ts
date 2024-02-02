type Todo = {
    title: string
    description: string
    completed: boolean
};

export type MyReadonly<T, K = undefined> =  K extends string ? (Readonly<Pick<T, K>> & Omit<T, K>) : Readonly<T>;

const todo: MyReadonly<Todo, 'title' | 'description'> = {
    title: "Hey",
    description: "foobar",
    completed: false,
}

const todo1: MyReadonly<Todo> = {
    title: "Hey",
    description: "foobar",
    completed: false,
}

// comment lines below when running tests
todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
todo.completed = true // OK

todo1.title = "Hello" // Error: cannot reassign a readonly property
todo1.description = "barFoo" // Error: cannot reassign a readonly property
todo1.completed = true
