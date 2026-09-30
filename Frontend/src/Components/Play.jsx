import style from '../css/play.module.css'

const gameModes = [
    {
        title: 'Solo Practice',
        tag: 'Warm-up',
        icon: '✦',
        accent: '#00008b',
        description: 'Build confidence with focused math drills and steady progress.'
    },
    {
        title: 'Timed Challenge',
        tag: 'Fast',
        icon: '⏱',
        accent: '#2563eb',
        description: 'Race the clock and sharpen your speed with quick-answer rounds.'
    },
    {
        title: 'Versus Bot',
        tag: 'Competitive',
        icon: '⚔',
        accent: '#1d4ed8',
        description: 'Face off against an AI rival and prove your math mastery.'
    },
    {
        title: 'Story Mode',
        tag: 'Adventure',
        icon: '★',
        accent: '#3b82f6',
        description: 'Unlock new levels and learn concepts through guided challenges.'
    }
]

export default function Play() {
    return (
        <div className={style.page}>
            <div className={style.shell}>
                <header className={style.header}>
                    <p className={style.eyebrow}>Choose your mode</p>
                    <h1>Pick a game mode to start playing</h1>
                    <p className={style.subtitle}>
                        Select the challenge that fits your mood, skill level, and learning goal.
                    </p>
                </header>

                <div className={style.grid}>
                    {gameModes.map((mode) => (
                        <button
                            key={mode.title}
                            type="button"
                            className={style.modeCard}
                            style={{ '--accent': mode.accent }}
                        >
                            <span className={style.iconWrap} aria-hidden="true">
                                {mode.icon}
                            </span>
                            <span className={style.tag}>{mode.tag}</span>
                            <span className={style.cardTitle}>{mode.title}</span>
                            <span className={style.description}>{mode.description}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}