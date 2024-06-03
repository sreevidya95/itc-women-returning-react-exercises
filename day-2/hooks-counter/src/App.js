
import { useEffect, useState } from "react"
import SignUpForm from './SignUpForm.js'
import ToDoList from "./ToDoList.js";
function App() {
  // localStorage.setItem('count',null);
  const[count,getcount] = useState(0);
  function reset()
{
  getcount(prevcount=>0);
}   
  function decrement(){
    if(count>0){
      getcount(prevcount=>prevcount-1);
    }
    
  }
  function increment(){
    if(count<20){
     getcount(count=>count+1);
     localStorage.setItem('count',count);
    }
  }
  useEffect(() => {
    if(localStorage.getItem('count') !== 'undefined' && localStorage.getItem('count') !== 'null')
      getcount(count=>count=(Number(localStorage.getItem('count'))));
    return()=>reset();
  },[]);
  
  const divstyle={
    color:count>10? "red" :"black"
   }
  return (
    <>
   <button onClick={decrement}>-</button>
  <div style={divstyle}>{count}</div>
   <button onClick={increment}>+</button>
   <input type="reset" onClick={reset}/>
   <br></br><br></br>
   <div>
   <SignUpForm />
   </div>
   <ToDoList/>
   </>
   
  );
}

export default App;
