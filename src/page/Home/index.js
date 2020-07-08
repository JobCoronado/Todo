import React from 'react'
import './style.scss'
const Home = () => {
    return (
        <div className="container">
            <h1>Tareas</h1>

            <div className="task-input">
                <div className="task-input__icon"></div>
                <input className="task-input__input"/>
            </div>
            <div className="button-random">
                <button className="button-random__button">
                    <i class="fas fa-random button-random__icon"></i>
                </button>
            </div>

        </div>
    )
}

export default Home
