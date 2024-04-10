"use client";
import Title from "@/components/title";
import Podium from "@/components/podium";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ScrollToTop from "@/components/scrollToTop";
import Analytics from "@/components/analytics";

export default function Home() {
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
