import React from 'react'
import { faCheck,faTrash} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import './style.scss'
const TaskItem = ({task,check,id,handleDelete,handleCheck}) => {
    return (
      <div className="task__item animate__animated animate__fadeInLeft">
        <span className={`task__icon ${check?'':'task__icon--outline'}`} onClick={()=>handleCheck(id)}>
          <FontAwesomeIcon icon={faCheck} size="sm" color="#FFFFFF" />
        </span> 
    <div className="task__description">{task}</div>
        <span className="task__icon task__icon--red" onClick={()=>handleDelete(id)}>
          <FontAwesomeIcon icon={faTrash} size="sm" color="#FFFFFF" />
        </span>
      </div>
    );
}

export default TaskItem
