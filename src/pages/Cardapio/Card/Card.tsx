import style from './Card.module.scss';
import { AiOutlinePlus } from 'react-icons/ai';

import img1 from '../../../../public/imgs/Rectangle 14.png';
import img2 from '../../../../public/imgs/Rectangle 15.png';
import img3 from '../../../../public/imgs/Rectangle 16.png';
import img4 from '../../../../public/imgs/Rectangle 17.png';
import img5 from '../../../../public/imgs/Rectangle 18.png';
import img6 from '../../../../public/imgs/Rectangle 19.png';
import img7 from '../../../../public/imgs/Rectangle 20.png';
import img8 from '../../../../public/imgs/Rectangle 21.png';
import img9 from '../../../../public/imgs/Rectangle 22.png';
import img10 from '../../../../public/imgs/Rectangle 23.png';

export const products = [
    {
        img: img1,
        title: "Cesta Completa",
        subtitle: "Orgânicos + PANC...",
        price: 100
    },
    {
        img: img2,
        title: "Cesta Orgânica",
        subtitle: "8 itens - aprox. 500g",
        price: 55
    },
    {
        img: img3,
        title: "Serum Artesanal",
        subtitle: "Oléo de jojoba",
        price: 64
    },
    {
        img: img4,
        title: "Linguiça Vegana",
        subtitle: "Base de beterraba",
        price: 25
    },
    {
        img: img5,
        title: "Queijo Vegano",
        subtitle: "Queijo de castanha",
        price: 38
    },
    {
        img: img6,
        title: "Doce de leite",
        subtitle: "Vegano e artesanal",
        price: 22
    },
    {
        img: img7,
        title: "Brigadeiro",
        subtitle: "Vegano e artesanal",
        price: 22
    },
    {
        img: img8,
        title: "Chá Verde",
        subtitle: "Agroflorestal",
        price: 40
    },
    {
        img: img9,
        title: "Café Nosso pai",
        subtitle: "Torrado e moído 250g",
        price: 25
    },
    {
        img: img10,
        title: "Manteiga",
        subtitle: "Vegana e artesanal",
        price: 20
    }

]



interface IProducts {
    img: any,
    title: string,
    subtitle: string,
    price: number
}


export function Card(props:IProducts) {
    return(
        <div className={style.card}>
            <img src={props.img} alt="Cesta Completa" />
            <h2>{props.title}</h2>
            <p>{props.subtitle}</p>
            <div>
                <AiOutlinePlus />
                <p>R${props.price}</p>
            </div>
        </div>
    )
}