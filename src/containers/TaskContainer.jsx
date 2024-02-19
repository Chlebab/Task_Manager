import React, { useState } from 'react';
import TaskList from '../components/TaskList';

const TaskContainer = () => {

    const [tasks, setTasks] = useState([
        {
            id: 1,
            name: "clean dishes"
        },
        {
            id: 2,
            name: "apply for jobs"
        }
    ])

    const [newTask, setNewTask] = useState('')
    
    return (  
        <>
            <p>Task container</p>
            <TaskList tasksProp = {tasks}/>
        </>
    );
}

export default TaskContainer;