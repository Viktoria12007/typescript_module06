## Цель задания:

Наработать практику использования различных утилитарных типов, научиться применять утилитарные типы для создания новых типов. Научиться писать собственные утилитарные типы.

## Что нужно сделать:

Реализуйте тип MyReadonly<T, K>, который принимает два аргумента T и K.

K - набор полей из T, которые необходимо сделать readonly. Когда K не передано, MyReadonly должен делать readonly все поля из типа T, как встроенный тип Readonly<T>.

```tsx
type Todo {
  title: string
  description: string
  completed: boolean
}

const todo: MyReadonly2<Todo, 'title' | 'description'> = {
  title: "Hey",
  description: "foobar",
  completed: false,
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
todo.completed = true // OK
```

## Советы и рекомендации

Для выполнения задания рекомендуем освежить память таких операторов как: extends, keyof, а так же таких утилитарных типов как: Omit.

## **Критерии оценки:**

- **"Зачет":**
  - Реализованный функционал отвечает требованиям задания
  - В реализации не допущены недочеты, связанные с оформлением или использованием типов.
- **"На доработку":**
  - Не выполнен один из пунктов выше
