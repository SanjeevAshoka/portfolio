import './App.css'
import Nav from './components/NavBar/Nav.tsx'
import Hero from './components/Hero/Hero.tsx'
import About from './components/About/About.tsx'
import Skills from './components/Skills/Skills.tsx'
import PortFolio from './components/Portfolio/PortFolio.tsx'
import Experience from './components/Experience/Experience.tsx'
import Contact from './components/Contact/Contact.tsx'
import Resume from './components/Resume/Resume.tsx'
import { AppProvider } from './Context/Context.tsx'
import { useEffect, useRef, useState } from 'react';

function App() {
  const [currentSection, setCurrentSection] = useState('');
  const updateCurrentSection = (sectionName: string)=>{
    setCurrentSection(sectionName)
  }
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    switch (currentSection) {
      case 'Hero':
        heroRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'About': case '关于': case 'À Propos': case 'संबंधित': case 'O Mnie':
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Skills':
        skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Portfolio': case '作品集': case 'पोर्टफोलियो': case 'Teczka':
        portfolioRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Experience': case '经验': case 'Expérience': case 'अनुभव':
        experienceRef.current?.scrollIntoView({ behavior: 'smooth' });
        console.log("sss");
        break;
      case 'Resume':
        resumeRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Contact': case '联系': case 'संपर्क': case 'Kontakt':
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  }, [currentSection]);
  return (
    <AppProvider>
      <Nav currentSectionUserwants = {currentSection} updateCurrentSection={updateCurrentSection}/>
      <div ref={heroRef}><Hero /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={skillsRef}><Skills /></div>
      <div ref={portfolioRef}><PortFolio /></div>
      <div ref={experienceRef}><Experience /></div>
      <div ref={resumeRef}><Resume /></div>
      <div ref={contactRef}><Contact /></div> 
    </AppProvider>
  )
}

export default App
