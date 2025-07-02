import Header from "./header"
import { useState } from "react";
function App() {
  const [title, setTitle] = useState("my name is ashutosh");
  
  function updateTitle(){
    setTitle("my name is "+ Math.random());
  }

  return (
    <div>
      {/* <button onClick={() => setCount(count+1)}>increment</button> */}
      <button onClick={updateTitle} >click me</button>
      {/* <h1>count: {count}</h1> */}
      <h1>title</h1>
      <Header title={title}/>
      <Header title="Second Header" />
    </div>
  )
}

export default App;