import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Cardapio } from "./pages/Cardapio/Cardapio"
import Login from "./pages/Login/Login"
import './stylesGlobal/main.scss'
import './stylesGlobal/_variables.scss'
import Perfil from './pages/Perfil/Perfil'
import { UserProvider } from "./contexts/UserContext"
import Dados from "./pages/Dados/Dados"
import Enderecos from "./pages/Enderecos/Enderecos"
import Pagamentos from "./pages/Pagamentos/Pagamentos"
import HistoricoPedidos from "./pages/HistoricoPedidos/Historico"



function App() {


  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/cardapio" element={<Cardapio />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/dados" element={<Dados />} />
          <Route path="/endereco" element={<Enderecos />} />
          <Route path="/pagamento" element={<Pagamentos />} />
          <Route path="/historico" element={<HistoricoPedidos />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App

