import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Productos from "./pages/Productos"
import Servicios from "./pages/Servicios"
import Contactos from "./pages/Contactos"
import Inicio from "./pages/Inicio"
import Nosotros from "./pages/Nosotros"



const App = () => {
  return (
    <>
    <BrowserRouter>
        <Header/>
       

          <Routes>

                <Route path="/" element={<Inicio/>} />
                <Route path="/nosotros" element={<Nosotros/>} />
                <Route path="/productos" element={<Productos/>} />
                <Route path="/servicios" element={<Servicios/>} />
                <Route path="/contactos" element={<Contactos/>} />
                <Route path="*" element={<Inicio/>} />

          </Routes>
          
        <Footer/>

    </BrowserRouter>
      
    
    </>
  )
}

export default App