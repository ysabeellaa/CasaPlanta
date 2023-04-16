import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import EllipseBG from '../../../public/imgs/EllipseBg.png';

import styles from './Cart.module.scss';
import { useCartContext } from '../../contexts/CartContext';


export default function Cart() {


  

  
  return (
    <div>
      <img src={EllipseBG} className={styles.imgBg} />
      <section className={styles.cart}>
        <h1>Carrinho de Compras</h1>
        <div>
            <p>Cesta Completa</p>
            <div className={styles.count}>
              <AiOutlineMinus  />
              <span>3</span>
              <AiOutlinePlus  />
            </div>
            <div className={styles.last_p}>
              <p >{(5).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}</p>
            
          </div>
        </div>
        <div>
            <p>Cesta Completa</p>
            <div className={styles.count}>
              <AiOutlineMinus  />
              <span>3</span>
              <AiOutlinePlus  />
            </div>
            <div className={styles.last_p}>
              <p >{(5).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}</p>
            
          </div>
        </div>
      </section>
      <section className={styles.amount}>
        <p>Valor Total</p>
        <p>{(5).toLocaleString('pt-BR', {
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