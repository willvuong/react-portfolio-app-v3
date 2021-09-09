import Header from './components/Header.js'
import Home from './components/Home.js'
import About from './components/About.js'
import Projects from './components/Projects.js'
import Footer from './components/Footer.js'

//data
import skillsData from './data/SkillsData.js'
import projectsData from './data/ProjectsData.js'
import contactData from './data/ContactData'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About skillsData={skillsData}/>
      <Projects projectsData={projectsData}/>
      <Footer contactData={contactData}/>
    </div>
  );
}

export default App;
