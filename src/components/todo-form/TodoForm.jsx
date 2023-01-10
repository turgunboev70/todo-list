import React, { useState, useRef, useEffect } from 'react'
import Todo from '../todo/Todo'
import "./TodoForm.css"

const TodoForm = () => {
    const [inputValue, setInputValue] = useState("")
    const [editId, setEditId] = useState(0)
    const [todos, setTodos] = useState([])
    const inputEl = useRef(null)

    useEffect(() => {
        inputEl.current.focus()
    }, [])

    const addTodos = e => {
        e.preventDefault()

        if (inputValue === ``) {
            return
        }

        if (editId) {
            const editTask = todos.find(item => item.id === editId)
            const updatedTask = todos.map(task => task.id === editTask.id ?
                task = { ...task, text: inputValue }
                :
                task = { ...task }
            )
            setTodos(updatedTask, ...todos)
            setEditId(0)
            setInputValue(``)
            return
        }

        const todo = {
            id: Math.random(),
            text: inputValue,
            completed: false
        }
        setTodos([...todos, todo])
        setInputValue(``)
    }

    const removeTodos = (id) => {
        const removedTodo = todos?.filter(todo => todo.id !== id)

        setTodos(removedTodo)
    }

    const editHandle = (id) => {
        const editTask = todos.find(item => item.id === id)
        setInputValue(editTask.text)
        setEditId(id)
    }

    return (
        <>
            <div className='todo-wrapper'>
                <h1 className='todo-title'>Daily To Do List</h1>
                <form className='todo-form' onSubmit={addTodos}>
                    <label className='todo-label' htmlFor="todo-input">
                        <input id='todo-input' className='todo-input' type="text" onChange={e => setInputValue(e.target.value)} value={inputValue} placeholder={'Add new list item'} ref={inputEl} />
                        <button className='todo-btn'>Add</button>
                    </label>
                </form>
                {todos.length !== 0 && <Todo todos={todos} removeTodos={removeTodos} setTodos={setTodos} editHandle={editHandle} />}
                <div className='todos-detail'>
                    <div className='todos-count'>
                        {`${todos?.length}items selected`}
                    </div>
                    <div className='todos-clear' onClick={() => setTodos([])}>
                        {`Clear All`}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoForm