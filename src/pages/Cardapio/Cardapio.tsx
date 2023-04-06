import style from './Cardapio.module.scss';
import { Card, products } from '../../components/Card/Card';
import EllipseBG from '../../../public/imgs/EllipseBg.png';
import Chest from '../../../public/icons/chestBuy.png'
import { BsSearch } from 'react-icons/bs';

export function Cardapio() {
    return(
        <div>
            <img src={EllipseBG} className={style.imgBg}/>
            <div className={style.header}>
                <img src={Chest} alt="Chest Buy" />
            </div>
            <div className={style.boxSearch}>
                <input type="search" name="filter" id="filter" placeholder='Digite sua pesquisa'/>
                <BsSearch className={style.boxSearch_icon}/>
            </div>
            <div className={style.listagemCardapio}>
                      
                {products.map(card => (
                    <Card img={card.img} title={card.title} subtitle={card.subtitle} price={card.price}/>
                ))}
                 
            </div>
        </div>
    )
}