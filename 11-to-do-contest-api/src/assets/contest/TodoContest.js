import { createContext , useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id : 1 ,
            todo : "Todo msg",
            completed : false,
        }
    ],

    //  idr hum functionality nhi likhni .. bss function ko initialise krna hai 
    addTodo : (todo) => {},
    updataTodo : (id,todo) => {},
    deleteTodo : (id) => {} ,
    toggleComplete : (id) => {}

})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider