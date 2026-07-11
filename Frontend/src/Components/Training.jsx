import React from "react";
import style from '../css/training.module.css'
import fire from '../assets/fire.png'
import stopwatch from '../assets/stopwatch.png'
import swords from '../assets/swords.png'

export default function Training(){
    return(
        <>
            <div>
                <h1>Training</h1>
                <div>
                    <h2>Puzzles</h2>
                    <button><img src={fire} alt="Fire icon" className={style.icon} /> Streak</button>
                    <button><img src={stopwatch} alt="Stopwatch icon" className={style.icon} /> Timed</button>
                    <button><img src={swords} alt="Swords icon" className={style.icon} /> PvP</button>
                </div>
                <div>
                    <h2>Areas to work on</h2>
                    <button>Integrals</button>
                    <button>Quadratics</button>
                    <button>Trigonometry</button>
                </div>
            </div>

            <div>
                <h1>Courses</h1>
                <div>
                    <button>Elementary math</button>
                    <button>Pre-algebra</button>
                    <button>Algebra</button>
                    <button>Geometry</button>
                    <button>Trigonometry</button>
                    <button>Probability and statistics</button>
                    <button>Calculus</button>
                    <button>Multivariable calculus</button>
                    <button>Linear algebra</button>
                    <button>Abstract algebra</button>
                </div>
            </div>
        </>
    )
}