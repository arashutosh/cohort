import React, { useState } from 'react'
let counter = 4
function App() {
  const [todo, setTodo] = useState([{
    id:1,
    title: "go to gym",
    description: "i will go to gym at 7pm"
  },
{
    id:2,
    title: "go to gym",
    description: "i will go to gym at 7pm"
  },
{
    id:3,
    title: "go to gym",
    description: "i will go to gym at 7pm"
  }])


function addTodo(){
  setTodo([...todo,{
    id: counter++,
    title: Math.random(),
    description: Math.random()
  }])
}

  return (
    <div>
      
      <button onClick={addTodo} >add a todo</button>
      {todo.map(todo=><Todo key={todo.id} id={todo.id}title={todo.title} description={todo.description}/>)}
    </div>
  )
}

function Todo({id, title, description}){
  return <div>
    <h1>{id}</h1> 
    <h1>{title}</h1>
    <h5>{description}</h5>
  </div>
}

export default App
