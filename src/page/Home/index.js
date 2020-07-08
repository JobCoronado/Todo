import React, {useState}from 'react'
import { faRandom} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import './style.scss'
import TaskList from '../../components/TaskList';
import Modal from '../../components/Modal';
import catService from '../../api/services/catService'
const Home = () => {
    const [state, setState] = useState({ 
        tasks:[],
        task:'',
        openModal:false,
    });
    const handleInputChange = (e)=>{
        const task = e.target.value;
        setState({...state,['task']:task})
    }
    const addTask = (e)=>{
        const {task,tasks} = state;

        tasks.push({task,check:false})
        setState(
            {...state,
                ['tasks']:tasks,
                ['task']: ""
            })
    }
    const handleDelete = (index) => {
        const tasks = state.tasks;
        tasks.splice(index, 1);
        setState({['tasks']: tasks});
    }

    const handleCheck = (index) => {
        const tasks = state.tasks;
        tasks[index].check=true;
        setState({['tasks']: tasks});
    }
    const toggleModal = ()=>{
        const {openModal} = state
        setState({
            ...state,
            ['openModal']: !openModal});
    }
    const taskRamdon = (number)=>{
        const {openModal,tasks} = state;
        catService(number).then((cats) => {
          cats.map((cat) => {
            tasks.push({task:cat.data.fact,check:false})
          });
          setState(
            {...state,
                ['tasks']:tasks,
                ['openModal']: !openModal
            })
        });
        
    }
    return (
        <div className="container">
            <h1 className="title">Tareas</h1>

            <div className="task-input">
                <input className="task-input__input"  color="#8CA1DC" placeholder="Agregar una tarea" value={state.task} onChange={handleInputChange}/>
                <button className="task-input__button-add animate__animated animate__bounce" onClick={addTask}>
                    Agregar
                </button>
            </div>
            <div className="button-random">
                <button className="button-random__button" onClick={toggleModal}>
                    <FontAwesomeIcon icon={faRandom} color="#FFFFFF"/>
                </button>
            </div>
            <Modal isOpen={state.openModal} toggleModal={toggleModal} taskRamdon={taskRamdon}/>
            <TaskList title="Tareas" tasks={state.tasks} check={false} handleDelete={handleDelete} handleCheck={handleCheck}/>
            <TaskList title="Completadas" tasks={state.tasks} check={true} handleDelete={handleDelete} handleCheck={handleCheck}/>
        </div>
    )
}

export default Home
