import './App.css'
import About from './components/About'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

function App() {

  return (
    <div className="App font-poppins  h-auto bg-[#23283e]">
    <Navbar/>
    <About/>
    <Projects/>
    </div>
  )
}

export default App
