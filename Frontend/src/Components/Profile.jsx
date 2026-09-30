import style from '../css/profile.module.css'

const stats = [
    { label: 'XP', value: '12,480' },
    { label: 'Streak', value: '18 days' },
    { label: 'Accuracy', value: '92%' },
    { label: 'Level', value: '12' }
]

const achievements = [
    'Algebra Explorer',
    'Speed Solver',
    'Weekly Champion',
    'Logic Builder'
]

const activity = [
    { title: 'Algebra drills', detail: 'Completed 24 problems · 96% accuracy' },
    { title: 'Timed challenge', detail: 'Best score: 84 points · 2 minutes left' },
    { title: 'Story mode', detail: 'Finished chapter 5 · +320 XP' },
    { title: 'Practice streak', detail: 'Maintained a 5-day learning routine' }
]

export default function Profile() {
    return (
        <div className={style.page}>
            <div className={style.card}>
                <header className={style.header}>
                    <div className={style.avatar}>JS</div>

                    <div className={style.identity}>
                        <p className={style.eyebrow}>Student profile</p>
                        <h1>Jamie Smith</h1>
                        <p className={style.subtitle}>Level 12 • Algebra master</p>
                    </div>

                    <button type="button" className={style.editButton}>Edit profile</button>
                </header>

                <div className={style.grid}>
                    <section className={style.panel}>
                        <div className={style.panelHeader}>
                            <h2>Overview</h2>
                        </div>

                        <div className={style.statsGrid}>
                            {stats.map((stat) => (
                                <div key={stat.label} className={style.statItem}>
                                    <span>{stat.label}</span>
                                    <strong>{stat.value}</strong>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className={style.panel}>
                        <div className={style.panelHeader}>
                            <h2>Achievements</h2>
                        </div>

                        <div className={style.badges}>
                            {achievements.map((achievement) => (
                                <span key={achievement} className={style.badge}>{achievement}</span>
                            ))}
                        </div>
                    </section>

                    <section className={`${style.panel} ${style.fullWidth}`}>
                        <div className={style.panelHeader}>
                            <h2>Recent activity</h2>
                        </div>

                        <ul className={style.activityList}>
                            {activity.map((item) => (
                                <li key={item.title} className={style.activityItem}>
                                    <div className={style.dot} aria-hidden="true" />
                                    <div>
                                        <h3>{item.title}</h3>
                                        <p>{item.detail}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    )
}
