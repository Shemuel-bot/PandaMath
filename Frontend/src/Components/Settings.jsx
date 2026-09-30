import style from '../css/settings.module.css'

const preferences = [
    { label: 'Sound effects', value: 'On' },
    { label: 'Notifications', value: 'Enabled' },
    { label: 'Daily goals', value: '3 tasks' },
    { label: 'Dark mode', value: 'Off' }
]

const options = [
    'Account',
    'Privacy',
    'Accessibility',
    'Notifications',
    'Progress',
    'Security'
]

export default function Settings() {
    return (
        <div className={style.page}>
            <div className={style.card}>
                <header className={style.header}>
                    <div>
                        <p className={style.eyebrow}>Preferences</p>
                        <h1>Settings</h1>
                    </div>
                    <button type="button" className={style.primaryButton}>Save changes</button>
                </header>

                <div className={style.layout}>
                    <aside className={style.sidebar}>
                        {options.map((option, index) => (
                            <button
                                key={option}
                                type="button"
                                className={`${style.navItem} ${index === 0 ? style.active : ''}`}
                            >
                                {option}
                            </button>
                        ))}
                    </aside>

                    <main className={style.content}>
                        <section className={style.section}>
                            <div className={style.sectionHeader}>
                                <h2>General</h2>
                            </div>

                            <div className={style.list}>
                                {preferences.map((item) => (
                                    <div key={item.label} className={style.row}>
                                        <div>
                                            <h3>{item.label}</h3>
                                        </div>
                                        <span>{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className={style.section}>
                            <div className={style.sectionHeader}>
                                <h2>Learning goals</h2>
                            </div>

                            <div className={style.goalBox}>
                                <div>
                                    <p className={style.goalLabel}>Current goal</p>
                                    <strong>Complete 30 algebra problems this week</strong>
                                </div>
                                <div className={style.progressTrack}>
                                    <span className={style.progressFill} />
                                </div>
                                <small>21 of 30 completed</small>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    )
}
