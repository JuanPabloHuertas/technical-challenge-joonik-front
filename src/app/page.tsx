import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://juanpablohuertas.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Desarrollado con ❤️ por Juan Pablo Huertas
        </a>
      </footer>
    </div>
  );
}
