import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Cardapio } from "./pages/Cardapio/Cardapio"
import Login from "./pages/Login/Login"
import './stylesGlobal/main.scss'
import './stylesGlobal/_variables.scss'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/cardapio" element={<Cardapio />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App

