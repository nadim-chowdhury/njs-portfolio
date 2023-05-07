import About from "@/components/About";
import HeroBanner from "@/components/HeroBanner";
import Hobbies from "@/components/Hobbies";
import Services from "@/components/Services";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <section className="home">
      <HeroBanner />
      <About />
      <Skills />
      <Services />
      <Hobbies />
    </section>
  );
}
