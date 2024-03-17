import React, {useState} from 'react';


function ToDoList(){

    const[tasks, setTasks] = useState([]);

    const [newTask, setNewTask] = useState("");

    function handleChange(event){
        setNewTask(event.target.value);
    }
    
    function addTask(){
        if(newTask !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){
        const updatedTask = tasks.filter((_, i) => i !== index);
        setTasks(updatedTask);
    }


    return( <>
                <div className="ToDOList">
                    <h1>TO-DO-LIST</h1>
                    <input type="text" placeholder="What do you wanna do?" onChange={handleChange} value={newTask}/>
                    <button onClick={addTask}>add</button>
                </div>

                <div className='display'>
                    <ol>
                        {tasks.map((task, index) =>
                            <li key={index}><span>{task}</span>
                            <button onClick={() => deleteTask(index)}>delete</button>
                            </li>
                        )}
                    </ol> 
                </div>
            </>
    );
}

export default ToDoList

