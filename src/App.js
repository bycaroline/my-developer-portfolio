import { Route, Routes } from "react-router-dom";
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import FamilyRecipes from "./components/FamilyRecipes";
import PhotoPortfolio from "./components/PhotoPortfolio";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}

      <Routes>

        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/familyrecipes' element={<FamilyRecipes />} />
        <Route path='/photoportfolio' element={<PhotoPortfolio />} />
      </Routes>

    </div>
  );
}

export default App;
