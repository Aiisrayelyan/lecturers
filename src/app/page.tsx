import Image from "next/image";
import styles from "./page.module.css";
import { getAllLecturers } from "./lib/api";

export default function Home() {
  const result = getAllLecturers();
  console.log(result);
  
  return (
    <main className={styles.main}>
    </main>
  );
}
