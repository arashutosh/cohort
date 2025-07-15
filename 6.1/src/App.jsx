function App() {
  return <div>
<CardWrapper> hii thereeee</CardWrapper>
  </div>
}

//   function TextComponent(){
//   return(
//     <div>
//       hii there...!!
//     </div>
//   )
// }

function CardWrapper({children}){
  return (
    <div style={{border: "2px solid black"}}>
      {children}
    </div>
  )
}
export default App;