
import { useState } from "react"
function App() {
  const[count,getcount] = useState(0);
  function decrement(){
    if(count>0){
      getcount(prevcount=>prevcount-1);
    }
    
  }
  function increment(){
    if(count<20){
      getcount(prevcount=>prevcount+1);
    }
    
   
  }
  const divstyle={
    color:count>10? "red" :"black"
   }
  return (
    <>
   <button onClick={decrement}>-</button>
  <div style={divstyle}>{count}</div>
   <button onClick={increment}>+</button>
   </>
  );
}

export default App;
