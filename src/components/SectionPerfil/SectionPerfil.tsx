import { Link } from 'react-router-dom';
import style from './SectionPerfil.module.scss'


interface IPerfil {
    img: string;
    title: string;
    subtitle?: string;
    icon: string;
    route: string;
}

export default function SectionPerfil({ img, title, subtitle, icon, route }: IPerfil) {
    return (
        <div className={style.div}>
            <img src={img} alt="" />
            <div>
                <h3>{title}</h3>
                <p>{subtitle}</p>
            </div>
            <Link to={route}>
                <img src={icon} alt="Link para página"></img>
            </Link>
        </div>
    )
}