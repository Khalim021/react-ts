import { Container } from "react-bootstrap"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import About from "./pages/About"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import {CartProvider} from './context/CartContext'

function App() {

  return (
    <CartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/shop" element={<Shop />}/>
          </Routes>
      </Container>
    </CartProvider>
  )
}

export default App
