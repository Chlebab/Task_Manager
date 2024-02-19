import Task from "./Task";
const TaskList = ({tasksProp}) => {

    const taskComponents = tasksProp.map((task) => {
        return (
            <Task>
                {task.name}
            </Task>
        )
    })

    return (
        <>
            <p>TaskList</p>
            <ul>
                {taskComponents}
            </ul>
        </>
    );
}

export default TaskList;