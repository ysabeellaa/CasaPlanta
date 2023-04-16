import style from './Card.module.scss';
import { AiOutlinePlus } from 'react-icons/ai';
import ModalProduct from '../ModalProduct/ModalProduct';


import img1 from '../../../public/imgs/Rectangle 14.png';
import img2 from '../../../public/imgs/Rectangle 15.png';
import img3 from '../../../public/imgs/Rectangle 16.png';
import img4 from '../../../public/imgs/Rectangle 17.png';
import img5 from '../../../public/imgs/Rectangle 18.png';
import img6 from '../../../public/imgs/Rectangle 19.png';
import img7 from '../../../public/imgs/Rectangle 20.png';
import img8 from '../../../public/imgs/Rectangle 21.png';
import img9 from '../../../public/imgs/Rectangle 22.png';
import img10 from '../../../public/imgs/Rectangle 23.png';
import { useState } from 'react';


export const products = [
    {
        img: img1,
        title: "Cesta Completa",
        subtitle: "Orgânicos + PANC...",
        price: 100,
        paragraphs: [
            "Acompanha:",
            "* Orgânicos",
            "* PANC",
            "* Planta medicinal",
        ]
    },
    {
        img: img2,
        title: "Cesta Orgânica",
        subtitle: "8 itens - aprox. 500g",
        price: 55,
        paragraphs: [
            "Considere:",
            "* Sem a utilização de agrotóxicos",
            "* Verduras e legumes frescos",
            "* Cultivados por produtores locais"
        ]
    },
    {
        img: img3,
        title: "Serum Artesanal",
        subtitle: "Oléo de jojoba",
        price: 64,
        paragraphs: [
            "Observações:",
            "* Ótima opção para cuidar da sua pele",
            "* Feito à base de óleo de jojoba",
            "* Rico em nutrientes e propriedades antioxidantes"
        ]
    },
    {
        img: img4,
        title: "Linguiça Vegana",
        subtitle: "Base de beterraba",
        price: 25,
        paragraphs: [
            "Observações:",
            "* Alimentação sem carne",
            "* Feita à base de beterraba",
            "* Alimentação mais equilibrada"
        ]
    },
    {
        img: img5,
        title: "Queijo Vegano",
        subtitle: "Queijo de castanha",
        price: 38,
        paragraphs: [
            "Observações:",
            "* À base de plantas",
            "* Utilização de castanhas",
            "* Textura suave e um sabor marcante"
        ]
    },
    {
        img: img6,
        title: "Doce de leite",
        subtitle: "Vegano e artesanal",
        price: 22,
        paragraphs: [
            "Observações:",
            "* Sem adição de açúcares refinados",
            "* Utilização de castanhas",
            "* Alimentação mais saudável"
        ]
    },
    {
        img: img7,
        title: "Brigadeiro",
        subtitle: "Vegano e artesanal",
        price: 22,
        paragraphs: [
            "Observações:",
            "* Sem adição de açúcares refinados",
            "* Utilização de castanhas",
            "* Alimentação mais saudável"
        ]
    },
    {
        img: img8,
        title: "Chá Verde",
        subtitle: "Agroflorestal",
        price: 40,
        paragraphs: [
            "Observações:",
            "* Sem adição de açúcares refinados",
            "* Utilização de castanhas",
            "* Alimentação mais saudável"
        ]
    },
    {
        img: img9,
        title: "Café Nosso pai",
        subtitle: "Torrado e moído 250g",
        price: 25,
        paragraphs: [
            "Observações:",
            "* Sem adição de açúcares refinados",
            "* Utilização de castanhas",
            "* Alimentação mais saudável"
        ]
    },
    {
        img: img10,
        title: "Manteiga",
        subtitle: "Vegana e artesanal",
        price: 20,
        paragraphs: [
            "Observações:",
            "* Sem adição de açúcares refinados",
            "* Utilização de castanhas",
            "* Alimentação mais saudável"
        ]
    }

]



interface IProducts {
    img: any,
    title: string,
    subtitle: string,
    price: number,
    paragraphs: string[],

}


export function Card(props: IProducts) {

    const [isOpen, setIsOpen] = useState(false);
    const [selectImage, setSelectImage] = useState(props.img);

    function handleOpenModal() {
        setIsOpen(true);
    }

    function handleCloseModal() {
        setIsOpen(false);
    }

    return (
        <div className={style.card}>
            <img src={props.img} alt="Cesta Completa" />
            <h2>{props.title}</h2>
            <p>{props.subtitle}</p>
            <div>
                <AiOutlinePlus onClick={handleOpenModal} />
                <p>R${props.price}</p>
                <ModalProduct isOpen={isOpen} handleCloseModal={handleCloseModal} image={selectImage} paragraphs={props.paragraphs} title={props.title} price={props.price} />
            </div>
        </div>
    )
}