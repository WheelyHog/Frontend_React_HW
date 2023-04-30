import { Route, Routes } from 'react-router-dom';
import './App.css';
import React, { useEffect, useRef, useState } from 'react'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage'
import WorksPage from './pages/WorksPage/WorksPage'
import BlogPage from './pages/BlogPage/BlogPage'
import WorkPage from './pages/WorkPage/WorkPage';
import MobileMenu from './components/MobileMenu/MobileMenu';


function App() {

  const refApp = useRef(null);
  const [active, setActive] = useState(false)

  const handleScroll = (event) => {
    if (active || menuActive) {
      event.preventDefault();
      event.stopPropagation();
    }
  };
  console.log(active);
  const [menuActive, setMenuActive] = useState(false)
  const showMobileMenu = () => {
    setMenuActive(!menuActive)
  }

  useEffect(() => {
    refApp.current.addEventListener('wheel', handleScroll);
    return () => refApp.current.removeEventListener('wheel', handleScroll);
  });

  return (
    <div ref={refApp}>
      <MobileMenu menuActive={menuActive} setMenuActive={setMenuActive} active={active} setActive={setActive} />
      <Header active={active} setActive={setActive} menuActive={menuActive} setMenuActive={setMenuActive} showMobileMenu={showMobileMenu} />
      <div className='container'>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/works' element={<WorksPage />} />
          <Route path='/works/:id' element={<WorkPage />} />
          <Route path='/blog' element={<BlogPage />} />
          {/* <Route path='/contact' element={<ContactPage />} /> */}
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
