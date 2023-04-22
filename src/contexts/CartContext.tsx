import React, { createContext, useContext, useState } from 'react'

interface ICartContext {
  // counters: { [image: string]: number };
  // setCounters: React.Dispatch<React.SetStateAction<{ [image: string]: number }>>;
  products: Record<number, IProductCart>;
  setProducts: React.Dispatch<React.SetStateAction<Record<number, IProductCart>>>;
  // incrementCounter: ( image:string, count: number) => number;

}

interface ICartProvider {
  children: React.ReactNode;
}
interface IProductCart {
  title: string;
  count: number;
  price: number;
  id: number;

}


const CartContext = createContext<ICartContext>({
  // counters: {},
  // setCounters: () => { },
  products: {},
  setProducts: () => {},
  // incrementCounter: (image:string, count: number) => count
})




export default function CartProvider({ children }: ICartProvider) {


  //const [counters, setCounters] = useState<{ [image: string]: number }>({}); //mapeia chaves do tipo string para valores do tipo number
  

  //prover os valores  do contexto
  const [productsCart, setProductsCart] = useState<Record<number, IProductCart>>({});


  // function incrementCounter(image: string, count: number): number {
  //   const newCount = count + 1;
  //   console.log(count)
  //   setCounters((prev) => ({ ...prev, [image]: newCount }));
  //   return newCount;
  // }
  

  
  return (
    <CartContext.Provider value={{products:productsCart,setProducts:setProductsCart }}>
      {children}
    </CartContext.Provider>
  )
}
export function useCartContext() {
  return useContext(CartContext);
}