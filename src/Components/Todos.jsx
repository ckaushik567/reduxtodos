import React from 'react';
import { useSelector } from 'react-redux';

function Todos() {

    const todos = useSelector(state => state.todos);
    console.log(todos)
    return (
        <div className="container">
            <ul>
                {todos.map((item) => {

                    return <li>{item.text}</li>
                })}
            </ul>
        </div>
    )
}

export default Todos
