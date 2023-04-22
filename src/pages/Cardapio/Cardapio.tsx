import style from './Cardapio.module.scss';
import { Card, products } from '../../components/Card/Card';
import EllipseBG from '../../../public/imgs/EllipseBg.png';
import Chest from '../../../public/icons/chestBuy.png'
import { BsSearch } from 'react-icons/bs';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

export function Cardapio() {

    const [filteredProducts, setFilteredProducts] = useState(products);

    //será chamada toda vez que houver uma mudança no campo de busca (onChange), função recebe um evento como argumento, que contém informações sobre a mudança no campo.
    function handleSearch(event: { target: { value: string; }; }) {
        // string que foi digitada pelo usuário no campo de busca
        const searchQuery = event.target.value.toLowerCase();
        // se a string contida na propriedade title de cada elemento do array inclui a string pesquisada
        const filtered = products.filter((product) =>
            product.title.toLowerCase().includes(searchQuery)
        );
        setFilteredProducts(filtered);
    }


    return (
        
        <div>
            <img src={EllipseBG} className={style.imgBg} />
            <div className={style.header}>
                <Link to="/carrinho">
                    <img src={Chest} alt="Chest Buy" />
                </Link>
            </div>
            
            <div className={style.boxSearch}>
                <input type="search" name="filter" id="filter" placeholder='O que você procura?'
                    onChange={handleSearch}
                />
                <BsSearch className={style.boxSearch_icon} />
            </div>
            <div className={style.listagemCardapio}>

                {filteredProducts.map(card => (
                    <Card img={card.img} title={card.title} subtitle={card.subtitle} price={card.price} paragraphs={card.paragraphs} key={card.img} id= {card.id}/>
                ))}

            </div>

            
            <Footer></Footer>
        </div>
    )
}