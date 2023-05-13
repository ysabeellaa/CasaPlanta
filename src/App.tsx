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
import ModalProduct from "./components/ModalProduct/ModalProduct"
import CartProvider from "./contexts/CartContext"
import Cart from "./pages/Cart/Cart"



function App() {


  return (
    <BrowserRouter>
      <UserProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/cardapio" element={<Cardapio />} />
            <Route path="/carrinho" element={<Cart/>} />
            <Route path="/dados" element={<Dados />} />
            <Route path="/endereco" element={<Enderecos />} />
            <Route path="/pagamento" element={<Pagamentos />} />
            <Route path="/historico" element={<HistoricoPedidos />} />
          </Routes>
        </CartProvider>
      </UserProvider>
    </BrowserRouter >
  )
}

export default App

