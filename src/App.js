import './App.css';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Organistatie from './components/Organistatie/Organistatie';
import Projecten from './components/projecten/Projecten';
import ProjectPages from './components/projectPage/ProjectPage';
import WekenBij from './components/wekenBij/WerkenBij';
import Footer from './components/Footer/Footer';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

export default function App() {
  
  const navigate = useNavigate();

  const navigateToProjects = () => {
    navigate('/projectPage', {replace: true});
  };

  const navigateToContact = () => {
    navigate('/contact', {replace: true});
  };

  const navigateHome = () => {
    navigate('/');
  };

  return (
    <Routes>
        <Route path="/projectPage" element={<ProjectPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  );
    
}

function Home() {
  return(
    <>
    <Navigation />
    <Header />
    <Intro />
    <Organistatie/>
    <Projecten />
    <WekenBij />
    <Footer />
  </>
  );
}

function ProjectPage() {
  return(
    <>
     <ProjectPages/>
     <Footer />
    </>
  );
}

function Contact() {
  return(
    <>
      <Navigation />
      <Footer />
    </>
  );
}
