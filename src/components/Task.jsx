const Task = ({children}) => {
    
    console.log("children: ",children)
    return (
        <>
            <li>
                Task: {children}
            </li>
        </>
    );
}

export default Task;