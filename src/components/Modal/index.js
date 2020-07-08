import React,{useState} from 'react'
import ReactDOM from 'react-dom';
import './style.scss'
const Modal = ({isOpen,toggleModal,taskRamdon}) => {
    const [number, setNumber] = useState(0);
    if(!isOpen)
        return null
    
    return ReactDOM.createPortal(
        <div className="modal">
           <div class="modal__content animate__animated animate__fadeInDownBig">
                <div className="modal__head">
                    <div className="modal__title">
                        Tareas Aleatorias
                    </div>
                    <span class="modal__close-icon" onClick={toggleModal}>&times;</span>
                </div>
                
                <div className="modal__input">
                     <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}}/>
                </div>
                <div className="modal__generate">
                    <button onClick={()=>taskRamdon(number)}>
                        Generar
                    </button>
                </div>
            </div>
        </div> ,
        document.getElementById("modal")
    )
}

export default Modal
