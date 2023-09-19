import { create } from 'zustand'

export interface Todo {
    id: number;
    text: string;
    done: boolean;
}


const addTodo = (todos: Todo[], text: string): Todo[] => [
    ...todos,
    {
        id: Math.max(0, Math.max(...todos.map(({id}) => id))) + 1,
        text,
        done: false
    }
] 


// Zustrand implimentasion
type Store = {
    test: string;
    todos: Todo[];
    newTodo: string;
    addTodo: () => void;
    setNewTodo: (text: string) => void;
}

const useStore = create<Store>((set) => ({
    test: "dette er en test",
    todos: [],
    newTodo: "",
    addTodo() {
        set((state) => ({
            ...state,
            todos: addTodo(state.todos, state.newTodo),
            newTodo: "",
        }))
    },
    setNewTodo(text: string) {
        set((state) => ({
            ...state,
            newTodo: text,
        }))
    },
}))

export default useStore