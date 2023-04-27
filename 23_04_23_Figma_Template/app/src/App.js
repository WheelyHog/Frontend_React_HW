import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage'
import WorksPage from './pages/WorksPage/WorksPage'
import BlogPage from './pages/BlogPage/BlogPage'
import ContactPage from './pages/ContactPage/ContactPage'
import WorkPage from './pages/WorkPage/WorkPage';


function App() {
  return (

    <div className='container'>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/works' element={<WorksPage />} />
        <Route path='/works/:id' element={<WorkPage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
