import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    fetch("http://sum-server.100xdevs.com/todos")
    .then(async function(res){
      const json = await res.json();
      setTodos(json);
    })
  },[]);
  return <div>
    {todos.map(Todo=><Todo key={todos.id} title={todos.title} description={todos.description} />)}
  </div>
}

function Todo({title, description}){
  return(
    <div>
      <h1>{title}</h1>
      <h1>{description}</h1>
    </div>
  )
}

export default App;