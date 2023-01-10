import React, { useState } from 'react'
import { FiCheck, FiTrash2, FiEdit } from "react-icons/fi"
import "./Todo.css"

const Todo = ({ todos, removeTodos, setTodos, editHandle }) => {

    const handleCompleted = (id) => {
        setTodos(
            todos?.map(todo => {
                if (todo.id === id) {
                    return ({ ...todo, completed: !todo.completed })
                }
                return todo
            })
        )

    }

    return (
        <>
            <div className='todos-wrapper'>
                {todos?.map(({ id, text, completed }) =>
                    <div className='todos-box' key={id}>
                        <div className='todo-inner'>
                            {completed ?
                                <div className='completed-task incomplete-task' onClick={() => handleCompleted(id)}>
                                    <FiCheck />
                                </div>
                                :
                                <div className='incomplete-task' onClick={() => handleCompleted(id)}></div>
                            }
                            <span className='todos-title' style={completed ? { textDecoration: "line-through", color: "gray" } : { textDecoration: "none" }}>
                                {text}
                            </span>
                        </div>
                        <div className='todo-icon'>
                            {!completed && <FiEdit className='todo-edit' onClick={() => editHandle(id)}/>}
                            <FiTrash2 onClick={() => removeTodos(id)} style={completed ? {color : "red"} : null}/>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Todo