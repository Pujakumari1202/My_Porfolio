import './App.css';
import {BrowserRouter ,Routes, Route} from "react-router-dom";
import Home from './compoments/Home.jsx'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />}/>
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
