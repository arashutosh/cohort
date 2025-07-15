// import Header from "./header"
import React from 'react';
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("my name is ashutosh");
function updateTitle(){
  setTitle("my name is "+Math.random());
}
  return (
      <div>
      <button onClick={updateTitle}>click me to update</button>
      <br />
      <Header title={title} />
      <Header title="First Header" />
      <Header title="Second Header" />
      <Header title="Third Header" />
      <Header title="Fourth Header" />
      <Header title="Fifth Header" />
      <Header title="Sixth Header" />
      <Header title="Seventh Header" />
      <Header title="Eighth Header" />
    </div>
  )
}

const Header = React.memo(function Header({title}){
  return(
    <>
      {title}
      <br />
    </>
  )
});
export default App;