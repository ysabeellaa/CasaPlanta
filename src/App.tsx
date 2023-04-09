import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Cardapio } from "./pages/Cardapio/Cardapio"
import Login from "./pages/Login/Login"
import './stylesGlobal/main.scss'
import './stylesGlobal/_variables.scss'
import Perfil from './pages/Perfil/Perfil'
import { UserProvider } from "./contexts/UserContext"




function App() {


  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/cardapio" element={<Cardapio />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App

