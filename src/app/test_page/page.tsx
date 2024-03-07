'use client'
import React, { useState } from 'react'

function App() {
  const [todos, setTodos] = useState<string[]>([])
  const [newTodo, setNewTodo] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value)
  }

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo])
      setNewTodo('')
    }
  }

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="Enter a new todo"
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
