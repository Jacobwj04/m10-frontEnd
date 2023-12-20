import './App.css';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Organistatie from './components/Organistatie/Organistatie';
import Projecten from './components/projecten/Projecten';
import ProjectPages from './components/projectPage/ProjectPage';
import {Routes, Route, useNavigate} from 'react-router-dom';

export default function App() {
  
  const navigate = useNavigate();

  const navigateToContacts = () => {
    navigate('/projectPage', {replace: true});
  };

  const navigateHome = () => {
    navigate('/');
  };

  return (
    <Routes>
        <Route path="/projectPage" element={<ProjectPage />} />
        <Route path="/" element={<Home />} />
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
  </>
  );
}

function ProjectPage() {
  return(
    <>
     <ProjectPages/>
    </>
  );
}
