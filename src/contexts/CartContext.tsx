import React, { createContext, useContext, useState } from 'react'

interface ICartContext {
  counters: { [image: string]: number };
  setCounters: React.Dispatch<React.SetStateAction<{ [image: string]: number }>>;
}

interface ICartProvider {
  children: React.ReactNode;
}

const CartContext = createContext<ICartContext>({
  counters: {},
  setCounters: () => { }
})



export default function CartProvider({ children }: ICartProvider) {


  const [counters, setCounters] = useState<{ [image: string]: number }>({}); //mapeia chaves do tipo string para valores do tipo number

  //adicionar ou atualizar a chave especificada com o novo valor.
  function setCounter(image: string, value: number) {
    setCounters({ ...counters, [image]: value });
  }
  

  //prover os valores  do contexto
  return (
    <CartContext.Provider value={{ counters, setCounters }}>
      {children}
    </CartContext.Provider>
  )
}
export function useCartContext() {
  return useContext(CartContext);
}