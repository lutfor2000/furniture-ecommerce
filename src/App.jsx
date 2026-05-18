import Navbar from './components/Navbar';
import { Link, Outlet } from 'react-router-dom';
function App() {
  

  return (
    <>
        <Navbar />
        <main className='min-h-screen'>
        <Outlet/>
        </main>
        <h1>Footer</h1>
    </>
  )
}

export default App
