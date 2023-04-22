import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import EllipseBG from '../../../public/imgs/EllipseBg.png';

import styles from './Cart.module.scss';
import { useCartContext } from '../../contexts/CartContext';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';




export default function Cart() {


  const { products, setProducts } = useCartContext();
  const productsArray = useMemo(() => (Object.values(products)), [products])
  const total = productsArray.reduce((acc, item) => acc + item.count * item.price, 0);


  function incrementCounter(id: number) {

    setProducts((prev) => {
      const product = prev[id];
      return ({ ...prev, [id]: { ...product, count: product.count + 1 } })
    });
  }

  function decrementCounter(id: number) {
    setProducts((prev) => {
      const product = prev[id];
      if (product.count <= 0) {
        return prev;
      }
      return ({ ...prev, [id]: { ...product, count: product.count - 1 } })
    });
  }




  return (
    <div>
      <img src={EllipseBG} className={styles.imgBg} />
      <section className={styles.cart}>
        <h1>Carrinho de Compras</h1>
        {productsArray.map(item => (

          <div key={item.id}>
            <p>{item.title} </p>
            <div className={styles.count}>
              <AiOutlineMinus onClick={() => decrementCounter(item.id)} />
              <span>{item.count}</span>
              <AiOutlinePlus onClick={() => incrementCounter(item.id)} />
            </div>
            <div className={styles.last_p}>
              <span className="price" aria-label="Preço">
                {(item.price * item.count).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </span>

            </div>
          </div>)
        )}


      </section>
      <section className={styles.amount}>
        <p>Valor Total</p>
        <p>{total.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })}</p>
      </section>
      <Link to="/pagamento">
        <div className={styles.end}>
          <p>Finalizar Compra</p>
        </div>
      </Link>
    </div>
  )
}