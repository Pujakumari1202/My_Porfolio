import './App.css';
import {BrowserRouter ,Routes, Route} from "react-router-dom";
import Home from './compoments/pages/Home'
import About from './compoments/pages/About'
import Skills from './compoments/pages/Skills'
import Projects from './compoments/pages/Project'
import Contact from './compoments/pages/Contact'



function App() {

  return (
    <div className='h-screen bg-blue-300'>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Skills" element={<Skills />}/>
          <Route path="/Projects" element={<Projects />}/>
          <Route path ="/Contact" element={<Contact />}/>
      
        </Routes>
      </BrowserRouter>

    </div>
  )
}



export default App
