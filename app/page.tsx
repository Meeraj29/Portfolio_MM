import About from '@/components/Home/About';
import Hero from '@/components/Home/Hero'
import Skills from '@/components/Home/skill';
import Education from '@/components/Home/Education';
import Contact from '@/components/Home/contact';
import Experience from '@/components/Home/experience';
import Project from '@/components/Home/project';
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Education />
       <Project />
      <Experience />
      <Contact />
     
    </main>
  );
}