import Hero from "./components/Hero";
import Features from "./components/Features";
// import SkillSection from "./components/SkillSection";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      {/* <SkillSection /> */}
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
