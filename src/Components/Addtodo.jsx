import React, { useState } from 'react';
import '../App.css';
import { useDispatch } from 'react-redux';
import { addToDo } from '../features/todoSlice';

function Addtodo() {

    const [inputValue ,setInputValue] = useState();
    const dispatch = useDispatch();

    function addTodo(){
        dispatch(addToDo(inputValue))
    }
    return (
            <div className="main-container">
                <input type="text"  onChange={(e)=>setInputValue(e.target.value)}/>
                <button onClick={addTodo}>Add</button>
            </div>
    )
}

export default Addtodo
