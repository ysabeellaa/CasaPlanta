import React, { createContext, useContext, useState } from 'react'

interface ICartContext {
  counters: { [image: string]: number };
  setCounters: React.Dispatch<React.SetStateAction<{ [image: string]: number }>>;
  products: any[];
  setProducts: React.Dispatch<React.SetStateAction<any[]>>;
}

interface ICartProvider {
  children: React.ReactNode;
}
interface IProductCart {
  title: string;
  count: number;
  price: number;
}


const CartContext = createContext<ICartContext>({
  counters: {},
  setCounters: () => { },
  products: [],
  setProducts: () => {},

})




export default function CartProvider({ children }: ICartProvider) {


  const [counters, setCounters] = useState<{ [image: string]: number }>({}); //mapeia chaves do tipo string para valores do tipo number

  //adicionar ou atualizar a chave especificada com o novo valor.
  /* function setCounter(image: string, value: number) {
    setCounters({ ...counters, [image]: value });
  } */
  
  

  //prover os valores  do contexto
  const [productsCart, setProductsCart] = useState<IProductCart[]>([]);

  return (
    <CartContext.Provider value={{ counters, setCounters,products:productsCart,setProducts:setProductsCart }}>
      {children}
    </CartContext.Provider>
  )
}
export function useCartContext() {
  return useContext(CartContext);
}