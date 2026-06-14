import style from '../css/mainScreenCenter.module.css'

export default function MainScreenCenter(){
    return(
        <div className={style.wrapper}>
            <div className={style.card}>
                <div className={style.userSection}>
                    <div className={style.userImage}>JD</div>
                    <div className={style.userInfo}>
                        <h1>Username+123</h1>
                        <p>Sharpen your skills with fast-paced math challenges.</p>
                    </div>
                </div>

                <div className={style.actions}>
                    <div className={style.actionRow}>
                        <button type="button" className={style.primaryButton}>Play</button>
                        <button type="button" className={style.secondaryButton}>Puzzles</button>
                    </div>
                    <div className={style.actionRow}>
                        <button type="button" className={style.outlineButton}>Leaderboard</button>
                        <button type="button" className={style.outlineButton}>Friends</button>
                    </div>
                </div>
            </div>
        </div>
    )
}