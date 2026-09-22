import style from '../css/default.module.css'
export default function Default(){
    return(
        <>
            <div className={style.pageBody}>
                <h1>Welcome to PandaMath! The #1 place for fun and competative online math!</h1>
                <div className={style.optionsContainer}>
                    <div className={style.btnContainer}>
                        <h2>Jump right into a game!!</h2>
                        <button className={style.button}>30 sec</button>
                        <button className={style.button}>1 min</button>
                        <button className={style.button}>5 min</button>
                        <button className={style.button}>10 min</button>
                        <button className={style.button}>30 min</button>
                    </div>

                    <div className={style.btnContainer}>
                        <h2>Practice and level up your skills!!</h2>
                        <button className={style.button}>Today's puzzles</button>
                        <button className={style.button}>lessons</button>
                        <button className={style.button}>puzzle streaks</button>
                        <button className={style.button}>play a bot</button>
                        <button className={style.button}>more...</button>
                    </div>
                </div>
                
            </div>
        </>
    )
}