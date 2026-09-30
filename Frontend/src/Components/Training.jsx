import style from '../css/training.module.css'
import fire from '../assets/fire.png'
import stopwatch from '../assets/stopwatch.png'
import swords from '../assets/swords.png'

const puzzleModes = [
    { label: 'Streak', icon: fire },
    { label: 'Timed', icon: stopwatch },
    { label: 'PvP', icon: swords }
]

const focusAreas = [
    'Integrals',
    'Quadratics',
    'Trigonometry',
    'Algebra',
    'Geometry',
    'Probability',
    'Calculus',
    'Linear algebra'
]

const courses = [
    'Elementary math',
    'Pre-algebra',
    'Algebra',
    'Geometry',
    'Trigonometry',
    'Probability and statistics',
    'Calculus',
    'Multivariable calculus',
    'Linear algebra',
    'Abstract algebra'
]

export default function Training() {
    return (
        <div className={style.page}>
            <div className={style.columnLayout}>
                <section className={style.panel}>
                    <div className={style.panelHeader}>
                        <p className={style.eyebrow}>Practice</p>
                        <h1>Training</h1>
                    </div>

                    <div className={style.sectionGroup}>
                        <h2>Puzzles</h2>
                        <div className={style.buttonGrid}>
                            {puzzleModes.map((mode) => (
                                <button key={mode.label} type="button" className={style.primaryButton}>
                                    <img src={mode.icon} alt={`${mode.label} icon`} className={style.icon} />
                                    {mode.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className={style.sectionGroup}>
                        <h2>Areas to work on</h2>
                        <div className={style.pillGrid}>
                            {focusAreas.map((area) => (
                                <button key={area} type="button" className={style.pillButton}>{area}</button>
                            ))}
                        </div>
                    </div>
                </section>

                <section className={style.panel}>
                    <div className={style.panelHeader}>
                        <p className={style.eyebrow}>Courses</p>
                        <h1>Learn more</h1>
                    </div>

                    <div className={style.courseGrid}>
                        {courses.map((course) => (
                            <button key={course} type="button" className={style.courseButton}>{course}</button>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}