import logo from './logo.svg';
import './App.css';
import {Header,Hero, AboutMe, Projects } from './components';

function App() {
  return (
    <div className="App">
     <Header/>
      <Hero/>
      <AboutMe/>
      <Projects/>
    </div>
  );
}

export default App;
