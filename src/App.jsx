import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Carrito } from './views/Carrito'
import { Pizza } from './views/Pizza'
import { Home } from './views/Home'
import { Navbar } from './components/Navbar'
import { Banner } from './components/Banner'


function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>

      <div className="container pt-4">
        <div className='cards_'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/pizza/:id" element={<Pizza />} />
          <Route path="*" element={<Home />} />
        </Routes>
        </div>
      </div>

    </>

  )
}

export default App
