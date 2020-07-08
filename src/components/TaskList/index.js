import React from 'react'
import TaskItem from '../TaskItem'

const TaskList = ({tasks ,title,check ,handleDelete,handleCheck}) => {

    if(tasks.length===0){
        return null
    }
    return (
        <div className="task">
                <div className="task__title">{title}</div>
                <div className="task_list">
                    {tasks.map((task, index)=>{
                       if(check===task.check){
                        return <TaskItem {...task} key={index} id={index} handleDelete={handleDelete} handleCheck={handleCheck}/>
                       }
                       return null;
                    })}
                </div>
            </div>
    )
}

export default TaskList
