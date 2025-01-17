import { Typography } from "@mui/material";
import styles from "./page.module.css";
import { BoxLocations } from "@/components/BoxLocations";

export default function Home() {


  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Typography variant="h1">Locations</Typography>
        <BoxLocations />
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
