import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <article className={styles.card}>
        <div className={styles.profileHeader}>
          <div className={styles.avatar}></div>
          <h1 className={styles.name}>Kartikeya Gupta</h1>
          <p className={styles.usn}>USN: 1BM23CB025</p>
        </div>
        <div className={styles.statusContainer}>
          <span className={styles.statusDot}></span>
          <span className={styles.statusText}>Active Student</span>
        </div>
      </article>
    </main>
  );
}
