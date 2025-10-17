import { createSlice, nanoid } from "@reduxjs/toolkit";

// Initial state define kar rahe hain
const initialState = {
    todos: [{ id: 1, text: "hello world" }] // Ek default todo object
};

// Slice create kar rahe hain
export const todoSlice = createSlice({
    name: "todo", // Slice ka naam
    initialState, // State jo slice se manage hogi
    reducers: { // Reducers define karte hain (state ko update karne ke functions)
        
        // Add new todo
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), // Unique id generate karne ke liye
                text: action.payload // Payload me jo text bheja hai wo store karenge
            };
            state.todos.push(todo); // Todos array me push kar do
        },

        // Remove todo by id
        removeTodo: (state, action) => {
            // Filter karke wahi todos bacha do jinka id match na ho
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },

        // Update existing todo
        updateTodo: (state, action) => {
            // Payload me { id, newText } expect kar rahe hain
            const { id, newText } = action.payload;
            // Existing todo ko find karo jo id se match karta ho
            const existingTodo = state.todos.find((todo) => todo.id === id);
            if (existingTodo) {
                existingTodo.text = newText; // Text ko update kar do
            }
        }
    }
});

// Export actions
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

// Export reducer for store
export default todoSlice.reducer;
