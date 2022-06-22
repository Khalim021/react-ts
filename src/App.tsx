import { Container } from "react-bootstrap"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import About from "./pages/About"
import Home from "./pages/Home"
import Shop from "./pages/Shop"

function App() {

  return (
    <>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/shop" element={<Shop />}/>
          </Routes>
      </Container>
    </>
  )
}

export default App
