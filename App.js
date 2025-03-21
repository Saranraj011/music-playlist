import React , {useState} from "react";

function App() {
  const [task ,setTask ] = useState("");
  const [tasks ,setTasks ] = useState([]);

  const addTask =()=>{
    if (task.trim() ==="")return;
    setTasks([...tasks,task]);
    setTask("");
  };

  const removeTask =(index)=>{
    const newTasks= task.filter((_,i)=>i !==index);
    setTasks(newTasks);
  };

  return(
    <div style={{textAlign:"center", marginTop:"50px"}}>
      <h2>TO_DO_LIST</h2>

      <input
      type="text"
      value={task}
      onChange={(e)=> setTask(e.target.value)}
      placeholder="Enter a task" />

      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((t,index)=>(
          <li key={index}>
            {t}{""}

            <button onClick={()=>removeTask(index)}
            style={{marginLeft:"10px"}}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;
