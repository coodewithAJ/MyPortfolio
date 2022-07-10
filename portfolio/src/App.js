
import './App.css';
import Layout from './components/Layout';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Project from './pages/Projects';
import Skills from './pages/Skills';

import FavContextProvider from './context/FavContext';

const App=()=>{
  return(
    <>
    <BrowserRouter>
    <FavContextProvider>
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Project/>}/>
        <Route path="/skills" element={<Skills/>}/>
      </Routes>

    </Layout>
    </FavContextProvider>
    
    </BrowserRouter>
    </>
  )
}

export default App;
