import style from  '../css/sideBar.module.css'

export default function Sidebar(){
    return (
        <>
            <div className={style.container}>
                <h1>User</h1>
                <button>Play</button>
                <button>Academy</button>
                <button>Training</button>
                <button>Profile</button>
                <button>Settings</button>
            </div>
        </>
    )
}