type X = {
    x: {
        a: 1
        b: 'hi'
        z: string
    }
    y: string
}

type Expected = {
    readonly x: {
        readonly a: 1
        readonly b: 'hi'
        readonly z: string,
    }
    readonly y: string,
}

export type DeepReadonly<T> = Readonly<Record<keyof T, Readonly<T[keyof T]>>>

type Todo = DeepReadonly<X> // should be same as `Expected`

const test: Todo = {
    x: {
        a: 1,
        b: 'hi',
        z: 'try change me too',
    },
    y: 'try change me',
};

// comment lines below when running tests
test.y = 'changed'; // Error
test.x.z = 'changed'; // Error
