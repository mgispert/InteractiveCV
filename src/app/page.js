import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "../components/homepage/homePage";
import Progress from "@/components/progress/progressPage";
import Experience from "@/components/experience/experiencePage";
import Contact from "@/components/contact/contactPage";
import Faq from "@/components/FAQ/faq";

export default function Home() {
  return (
    <main className={styles.main}>
      <HomePage />
      <Progress />
      <Experience />
      <Faq />
      <Contact />
    </main>
  );
}
