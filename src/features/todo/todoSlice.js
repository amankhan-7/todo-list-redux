import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{ id: 1, text: "Hello world", completed: false }],
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // Action to add a new todo
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), // Use nanoid for generating a unique ID
                text: action.payload.text, // Get the text from the payload
                completed: false, // Default to false when a new todo is added
            };
            state.todos.push(todo); // Add the new todo to the end of the list
        },

        // Action to remove a todo
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },

        // Action to set todos (fetched from API)
        setTodos: (state, action) => {
            // Simply add the fetched todos to the state, not overwrite
            state.todos = [...state.todos, ...action.payload.map((todo) => ({
                id: todo.id,
                text: todo.title, // Map 'title' to 'text'
                completed: todo.completed,
            }))];
        },

        // Action to update a todo's text
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const todo = state.todos.find((todo) => todo.id === id);
            if (todo) {
                todo.text = text; // Update the todo's text
            }
        },
    },
});

// Export actions
export const { addTodo, removeTodo, setTodos, updateTodo } = todoSlice.actions;

// Export reducer
export default todoSlice.reducer;
