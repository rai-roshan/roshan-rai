import Head from 'next/head'
import NavBar from '../components/NavBar';
import NavBtn from '../components/NavBtn';
import HomeSection from './Sections/Home';
import EducationSection from "./Sections/Education";
import SkillsSection from "./Sections/Skills";
import Experience from "./Sections/Experience";
import ProjectsSection from "./Sections/Projects";
import ContactSection from "./Sections/Contact";
export default function Home() {
  return (
    <div className="relative h-full w-full">
      <Head>
          <title>Rai Roshan :)</title>
          <meta name="description" content="Rai Roshan Software Engineer, 2022 graduate from Army Institute of Technology" />
          <meta property="og:title" content="Rai Roshan" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.roshanrai.tech/" />
          <meta property="og:image" content="https://drive.google.com/file/d/16ECQkfy6VqtMmkGEcLHHK2-Bi2uHkfxT/view?usp=sharing" />
          <meta property="og:image:secure_url" content="https://drive.google.com/file/d/16ECQkfy6VqtMmkGEcLHHK2-Bi2uHkfxT/view?usp=sharing" />
          <link rel="icon" href="/favicon.ico" />
      </Head>

        <NavBar />


        <HomeSection />
        <EducationSection />
        <SkillsSection />
        <Experience />
        <ProjectsSection />
        <ContactSection />

        <NavBtn />
    </div>
  )
}
