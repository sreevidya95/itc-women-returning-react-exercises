
import { useState } from 'react'
import ToDo from './Todo'
export default function ToDoList(){
    const[todos,getTodo]=useState([]);
    const[input,setInput]=useState("");
    function handleAdd(){
       let todoData={
        task:input,
        completed:false
       }
       let newTodo=[...todos];
         newTodo.push(todoData);
         getTodo(newTodo);
    }
    const handleToggle = (index) => {
                const tasks = [...todos];
        
                tasks[index].completed = !tasks[index].completed
        
                getTodo(tasks);
            }
            function handleRemove(index){
                        const tasks = [...todos]
                
                        tasks.splice(index, 1)
                
                        getTodo(tasks )
                    }
// class ToDoList extends Component {
//     state = {
//         input: '',
//         tasks: JSON.parse(localStorage.getItem('tasks')) || []
//     }

//     handleAdd = () => {
//         if (!this.state.input) return

//         this.setState({ tasks: [...this.state.tasks, { taskName: this.state.input, completed: false }] })
//     }

//     handleRemove = (index) => {
//         const tasks = [...this.state.tasks]

//         tasks.splice(index, 1)

//         this.setState({ tasks })
//     }

//     handleChange = (event) => {
//         this.setState({ input: event.target.value })
//     }

//     handleToggle = (index) => {
//         const tasks = [...this.state.tasks]

//         tasks[index].completed = !tasks[index].completed

//         this.setState({ tasks })
//     }

//     componentDidUpdate = (prevProps, prevState) => {
//         if (this.state.tasks !== prevState.tasks) {
//             localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
//         }
//     }

    // render() {
        return (
            <div>
                   <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
                    <input type="button" value="add" onClick={handleAdd}/> 
                 <ul>
                    {console.log(todos)}
                    {todos.map((value,key) => {
                         console.log(key);
                        return (
                            <ToDo 
                                key={key}
                                index={key}
                                task={value}
                                handleToggle={handleToggle}
                                handleRemove={handleRemove}
                            />
                        )
                    })}
                </ul>  *
            </div>
        )
    }


// export default ToDoList
