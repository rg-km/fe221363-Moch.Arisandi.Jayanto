import create from 'zustand';
// - `addTodo({id, text, isDone})` : function for adding new todo to array
// - `removeTodo(id)` : function for removing todo (using `id` for parameter)
// - `toggleTodo(id)`: function for toggling todo is done or not (using `id` for parameter)

const useTodoStore =
// TODO: answer here

create((set) => ({
    todos: [],
    addTodo: (todo) => {
        set((state) => ({
            todos: [...state.todos, todo],
        }));
    },
    removeTodo: (id) => {
        set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
        }));
    },
    toggleTodo: (id) => {
        set((state) => ({
            todos: state.todos.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)),
        }));
    },
}));
export default useTodoStore;
