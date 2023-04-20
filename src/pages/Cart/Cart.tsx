import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import EllipseBG from '../../../public/imgs/EllipseBg.png';

import styles from './Cart.module.scss';
import { useCartContext } from '../../contexts/CartContext';




export default function Cart() {

  const { products } = useCartContext();
  const total = products.reduce((acc, item) => acc + item.price, 0);



  return (
    <div>
      <img src={EllipseBG} className={styles.imgBg} />
      <section className={styles.cart}>
        <h1>Carrinho de Compras</h1>
        {products.map(item => (

          <div>
            <p>{item.title}</p>
            <div className={styles.count}>
              <AiOutlineMinus />
              <span>{item.count}</span>
              <AiOutlinePlus />
            </div>
            <div className={styles.last_p}>
              <span className="price" aria-label="Preço">
                {item.price.toLocaleString('pt-BR', {
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
      <div className={styles.end}>
        <p>Finalizar Compra</p>
      </div>
    </div>
  )
}