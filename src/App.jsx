import { Routes, Route } from 'react-router-dom';
import NavbarMenu from './components/NavbarMenu';
import Home from './pages/Home';
import Temperature from './pages/Temperature';

function App() {


  return (
    <div className='bg-neutral-900 min-h-screen'>
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/temperature" element={<Temperature />} />
      </Routes>
    </div>
  )
}

export default App
