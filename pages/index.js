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
          <title>Rai Roshan | Software Engineer</title>
          <meta name="twitter:card" content="summary" key={"twcard"}></meta>
          <meta name="twitter:site" content="@RaiRoshan22037" key={"twsite"}></meta>
          <meta name="twitter:creator" content="@RaiRoshan22037" key={"twcreator"}></meta>
          <meta property="twitter:title" content="Rai Roshan | Software Engineer" key={"twtitle"}/>
          <meta name="twitter:description" content="Rai Roshan Software Engineer, 2022 graduate from Army Institute of Technology" key={"twdescription"} />
          <meta property="twitter:image" content="https://raw.githubusercontent.com/rai-roshan/roshan-rai/main/public/images/portfolio_preview.png" key={"twimage"} />

          <meta name="description" content="Rai Roshan Software Engineer, 2022 graduate from Army Institute of Technology" />

          <meta property="og:title" content="Rai Roshan | Software Engineer" key={"ogtitle"}/>
          <meta property="og:type" content="website" key={"ogtype"} />
          <meta name="og:description" content="Rai Roshan Software Engineer, 2022 graduate from Army Institute of Technology" og={"ogdesc"} />
          <meta property="og:url" content="https://www.roshanrai.tech/" og={"ogurl"} />
          <meta property="og:image" content="https://raw.githubusercontent.com/rai-roshan/roshan-rai/main/public/images/portfolio_preview.png" og={"ogimg"} />
          <meta property="og:image:secure_url" content="https://raw.githubusercontent.com/rai-roshan/roshan-rai/main/public/images/portfolio_preview.png" og={"ogimgsecure"} />
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
