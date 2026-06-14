import style from '../css/mainScreenCenter.module.css'

export default function MainScreenCenter(){
    return(
        <>
            <div className={style.container}>
                <div >
                    <div>Image</div>
                    <h1>Username+123</h1>
                </div>
                <div>
                    <div>
                        <button>Play</button>
                        <button>Puzzles</button>
                    </div>
                    <div>
                        <button>leader board</button>
                        <button>friends</button>
                    </div>
                </div>
            </div>
            
        </>
    )
}