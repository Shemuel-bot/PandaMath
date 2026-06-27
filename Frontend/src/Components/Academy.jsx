import style from '../css/academy.module.css'

export default function Academy(){
    return(
        <section className={style.academy}>
            <div className={style.card}>
                <header className={style.header}>
                    <h1 className={style.title}>Panda Academy</h1>
                    <p className={style.subtitle}>
                        Choose your grade below to unlock tailored lessons, practice sets, and progress tracking designed for every step of your math journey.
                    </p>
                </header>

                <div className={style.gradeGrid}>
                    <button className={style.gradeButton}>Grade 3</button>
                    <button className={style.gradeButton}>Grade 4</button>
                    <button className={style.gradeButton}>Grade 5</button>
                    <button className={style.gradeButton}>Grade 6</button>
                    <button className={style.gradeButton}>Grade 7</button>
                    <button className={style.gradeButton}>Grade 8</button>
                    <button className={style.gradeButton}>Grade 9</button>
                    <button className={style.gradeButton}>Grade 10</button>
                    <button className={style.gradeButton}>Grade 11</button>
                    <button className={style.gradeButton}>Grade 12</button>
                </div>
            </div>
        </section>
    )
}