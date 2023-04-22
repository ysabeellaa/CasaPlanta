import EllipseBG from '../../../public/imgs/EllipseBg.png';
import Footer from '../../components/Footer/Footer';
import styles from './Pagamentos.module.scss';
import { AiOutlinePlus, AiOutlineCreditCard} from 'react-icons/ai';


export default function Pagamentos() {
    return (
        <div>
            <img src={EllipseBG} className={styles.imgBg} />
            <section className={styles.cart}>
                <h1>Formas de Pagamento</h1>
                <div>
                    <AiOutlinePlus className={styles.icons}/>
                    <div>
                        <p>Cadastrar</p>
                        <p>Novo Cartão</p>
                    </div>
                </div>
                <div>
                    <AiOutlineCreditCard className={styles.icons}/>
                    <div>
                        <p>Crédito</p>
                        <p>...0190</p>
                    </div>
                </div>

            </section>

            <Footer></Footer>
        </div>
    )
}