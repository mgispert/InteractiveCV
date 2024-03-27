"use client";
import Title from "@/components/title";
import Progress from "@/components/progress";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ScrollToTop from "@/components/scrollToTop";

export default function Home() {
  return (
    <main>
      <Title />
      <Navbar />
      <Progress />
      <Experience />
      <Faq />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
