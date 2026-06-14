import style from '../css/mainScreenCenter.module.css'
import math from '../assets/math.png'
import podium from '../assets/podium.png'
import friends from '../assets/high-five.png'

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
                        <button type="button" className={style.primaryButton}>
                            <img className={style.img} src={math} alt="" />
                            Play
                        </button>
                        <button type="button" className={style.secondaryButton}>Puzzles</button>
                    </div>
                    <div className={style.actionRow}>
                        <button type="button" className={style.outlineButton}>
                            <img className={style.img} src={podium} alt=""/>
                            Leaderboard
                        </button>
                        <button type="button" className={style.outlineButton}>
                             <img className={style.img} src={friends} alt=""/>
                            Friends
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}