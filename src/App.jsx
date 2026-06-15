import Navbar from './components/Navbar';
import { Link, Outlet } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  
  return (
    <>
        <Navbar />
        <main className='min-h-screen'>
        <Outlet/>
        </main>
        <Footer/>
    </>
  )
}

export default App
