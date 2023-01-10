import React, { useState, useRef, useEffect } from 'react'
import "./TodoEdit.css"

const TodoEdit = ({text}) => {
    const [inputValue, setInputValue] = useState(``)
    const inputEl = useRef(null)

    useEffect(() => {
        inputEl.current.focus()
    }, [])

    const editHandle = (e) => {
        e.prevantDefault()

        text = inputValue
    }

    return (
        <div className='edit-wrapper'>
            <form className='todo-form' onSubmit={editHandle}>
                <label className='todo-label' htmlFor="todo-input">
                    <input id='todo-input' className='todo-input' type="text" onChange={e => text = e.target.value} value={text} placeholder={'Add new list item'} ref={inputEl} />
                    <button className='todo-btn'>Edit</button>
                </label>
            </form>
        </div>
    )
}

export default TodoEdit