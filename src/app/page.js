"use server";
import Title from "@/components/title";
import Podium from "@/components/podium";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import dynamic from "next/dynamic";
const Analytics = dynamic(
  () => import("@/components/analytics").then((module) => module.default),
  { ssr: false }
);
const ScrollToTop = dynamic(
  () => import("@/components/scrollToTop").then((module) => module.default),
  { ssr: false }
);

export default async function Home() {
  return (
    <main>
      <Title />
      <Navbar />
      <Podium />
      <Experience />
      <Analytics />
      <Faq />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
