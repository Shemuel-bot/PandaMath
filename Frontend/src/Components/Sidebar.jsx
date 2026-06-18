import { useNavigate } from 'react-router-dom'

import style from  '../css/sideBar.module.css'
import playIcon from '../assets/math.png'
import academyIcon from '../assets/education.png'
import trainingIcon from '../assets/podium.png'
import profileIcon from '../assets/user.png'
import settingsIcon from '../assets/setting.png'

export default function Sidebar(){
    const navigate = useNavigate()
    return (
        <div className={style.container}>
            <h1>User</h1>
            <button>
                <img src={playIcon} alt="Play icon" className={style.icon} />
                Play
            </button>
            <button onClick={() => {navigate('/academy')}}>
                <img src={academyIcon} alt="Academy icon" className={style.icon} />
                Academy
            </button>
            <button>
                <img src={trainingIcon} alt="Training icon" className={style.icon} />
                Training
            </button>
            <button>
                <img src={profileIcon} alt="Profile icon" className={style.icon} />
                Profile
            </button>
            <button>
                <img src={settingsIcon} alt="Settings icon" className={style.icon} />
                Settings
            </button>
        </div>
    )
}