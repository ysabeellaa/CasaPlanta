import React, { useContext, useState, useEffect } from 'react'
import Modal from 'react-modal'
import { UserContext } from '../../contexts/UserContext';
import CartProvider, { useCartContext } from '../../contexts/CartContext';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';

import styles from './ModalProduct.module.scss';
//propriedade appElement no componente Modal para um nó DOM válido que represente o elemento raiz do aplicativo.

Modal.setAppElement('#root');

interface IModalProps {
    isOpen: boolean;
    handleCloseModal: () => void;
    image: any;
    paragraphs: string[];
    title: string;
    price: number
    count?: number;
    //modalKey: string;
}


export default function ModalProduct({
    isOpen,
    handleCloseModal,
    image,
    paragraphs,
    title,
    price
    //modalKey
}: IModalProps) {

    //cria duas variáveis: counters e setCounters, que são extraídas do valor retornado pelo useCartContext()
    const { counters, setCounters, setProducts } = useCartContext();
    const [count, setCount] = useState<number>(counters[image] ||  1);
   
   
   


    function addProductIfBiggerThanZero() {
            const newPrice = price * count;
            const newProduct = { title: title, count: count, price: newPrice };
            setProducts(prevProducts => [...prevProducts, newProduct]);
        
    }


   
    
    function incrementCounter() {
        const newCount = count + 1;
        setCount(newCount);
        setCounters((prev) => ({ ...prev, [image]: newCount }));
    }

    function decrementCounter() {
        const newCount = count - 1;
        if (newCount < 0) {
            return;
        }
        setCount(newCount);
        setCounters((prev) => ({ ...prev, [image]: newCount }));
        getPrice();
    }
    
    function getPrice(): number {
        return price * count;
         }


    return (
        <Modal style={{
            overlay: { backgroundColor: 'rgba(0,0,0,0.5)' },
            content: {
                backgroundColor: '#DFDFDF',
                borderRadius: '5%'
            }
        }}
            isOpen={isOpen}
            onRequestClose={handleCloseModal}>
            <div className={styles.close}>
                <AiOutlineClose

                    onClick={handleCloseModal}
                />
            </div>
            <div className={styles.container}>
                <div className={styles.div_img}>
                    <img src={image} alt="" />
                </div>
                <div className={styles.div_content}>
                    <h1>{title}</h1>
                    {paragraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}

                    <div className={styles.last_p}>
                        <p >{getPrice().toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        })}</p>
                    </div>
                </div>
                <div className={styles.count}>
                    <div>
                        <AiOutlineMinusCircle onClick={decrementCounter} />
                        <span>{count}</span>
                        <AiOutlinePlusCircle onClick={incrementCounter} />
                    </div>
                    <button onClick={addProductIfBiggerThanZero}>Adicionar</button>
                </div>
            </div>
        </Modal>


    )

}
