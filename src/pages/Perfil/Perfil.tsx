import EllipseBG from '../../../public/imgs/EllipseBg.png';
import SectionPerfil from '../../components/SectionPerfil/SectionPerfil';
import style from './Perfil.module.scss';
import icon_seta from '../../../public/imgs/seta.png';
import imgDados from '../../../public/imgs/Dados.png';
import imgEndereco from '../../../public/imgs/GPS.png';
import imgPagamento from '../../../public/imgs/Pagamento.png';
import imgHistorico from '../../../public/imgs/Histórico.png';
import { useUserAuthenticationContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
// import { UserContext } from "../../contexts/UserContext";

//const user = useContext(UserContext)?.[0];

export default function Perfil() {
    const { isAuthenticated, user } = useUserAuthenticationContext();

    if (!isAuthenticated) {
        window.location.replace('http://localhost:5173/login');


    }


    return (

        <div>

            <section>
            <img src={EllipseBG} className={style.imgBg} />
            <div >
                {user && (
                    <div className={style.user}>
                        <img className={style.user_img} src={user.picture} alt={user.name} />
                        <h3>{user.name}</h3>
                    </div>
                )}
            </div>
                <SectionPerfil img={imgDados} title='Dados' subtitle='Minhas informações de conta' icon={icon_seta} />
                <SectionPerfil img={imgEndereco} title='Endereços' subtitle='Meus endereços de entrega' icon={icon_seta} />
                <SectionPerfil img={imgPagamento} title='Pagamentos' subtitle='Minhas opções de pagamento' icon={icon_seta} />
                <SectionPerfil img={imgHistorico} title='Histórico de pedidos' subtitle='Pedidos já contabilizados aqui' icon={icon_seta} />


            </section>
        </div>
    )
}