import { useState, useEffect } from 'react'
// Using CSS Modules
// import styles from '@/styles/todoprogress.module.css'

export default function TodoProgress({ completed_task = 0, total_task = 5 }) {
    const [loadStyles, setLoadStyles] = useState(false);
    const [styles, setStyles] = useState(null);
    useEffect(() => {
        (async () => {
            const { default: styles } = await import('@/styles/todoprogress.module.css');
            setStyles(styles);
            setLoadStyles(true);
        })()

    }, []);

    return (
        <>
            {
                loadStyles && <section className={styles.todo_progress}>
                    <div className={styles.progress_left}>
                        <div className={styles.title}>Task Done</div>
                        <div className={styles.sub_title}>Keep it up</div>
                    </div>
                    <div className={styles.progress_right}>
                        <div className={styles.progress}>
                            <div className={styles.progress_text}>{completed_task}/{total_task}</div>
                        </div>
                    </div>
                </section>
            }

        </>
    )
}