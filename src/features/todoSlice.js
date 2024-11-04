import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos:[{id:1,text:"Task 1"}]
};

const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addToDo:(state,action)=>{
            const newTodo= {
                id:2,
                text:action.payload
            }
            state.todos.push(newTodo);
        },
        removeTodod:(state,action)=>{
            state.todos=state.todos.filter((todo)=> action.payload!==todo.id);
        }
    }
});

export const {addToDo,removeTodod} = todoSlice.actions;
export default todoSlice.reducer;