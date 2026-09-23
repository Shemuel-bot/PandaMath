import { useState } from 'react'
import style from '../css/default.module.css'

const buttonColors = [
    'linear-gradient(135deg, #0ea5e9 0%, #22d3ee 100%)',
    'linear-gradient(135deg, #f97316 0%, #facc15 100%)',
    'linear-gradient(135deg, #22c55e 0%, #a3e635 100%)',
    'linear-gradient(135deg, #ec4899 0%, #fb7185 100%)',
    'linear-gradient(135deg, #8b5cf6 0%, #c084fc 100%)',
]

function randomButtonColor() {
    return buttonColors[Math.floor(Math.random() * buttonColors.length)]
}

export default function Default(){
    const [colors] = useState(() => Array.from({ length: 10 }, randomButtonColor))

    return(
        <>
            <div className={style.pageBody}>
                <h1>Welcome to PandaMath! The #1 place for fun and competative online math!</h1>
                <div className={style.optionsContainer}>
                    <div className={style.actionsContainer}>
                        <h2>Jump right into a game!!</h2>
                        <div className={style.wrapper}>
                            <div className={style.btnContainer}>
                                <h3>Speed matches</h3>
                                <button className={style.button} style={{ '--button-color': colors[0] }}>30 sec</button>
                                <button className={style.button} style={{ '--button-color': colors[1] }}>1 min</button>
                            </div>

                            <div className={style.btnContainer}>
                                <h3>Longer matches</h3>
                                <button className={style.button} style={{ '--button-color': colors[2] }}>5 min</button>
                                <button className={style.button} style={{ '--button-color': colors[3] }}>10 min</button>
                                <button className={style.button} style={{ '--button-color': colors[4] }}>30 min</button>
                            </div>
                        </div>
                    </div>

                    <div className={style.actionsContainer}>
                        <h2>Practice and level up your skills!!</h2>
                        <div className={style.wrapper}>
                            <div className={style.btnContainer}>
                                <button className={style.button} style={{ '--button-color': colors[5] }}>Today's puzzles</button>
                                <button className={style.button} style={{ '--button-color': colors[6] }}>lessons</button>
                                <button className={style.button} style={{ '--button-color': colors[7] }}>puzzle streaks</button>
                            </div>

                            <div className={style.btnContainer}>
                                <button className={style.button} style={{ '--button-color': colors[8] }}>play a bot</button>
                                <button className={style.button} style={{ '--button-color': colors[9] }}>more...</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}