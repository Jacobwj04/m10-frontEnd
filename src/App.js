import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Organistatie from './components/organistatie/Organistatie';

function App() {
  return (
    <>
    <Navigation />
    <Header />
    <Intro />
    <Organistatie />
    </>
  );
}

export default App;
