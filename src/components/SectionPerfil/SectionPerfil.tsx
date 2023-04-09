import style from './SectionPerfil.module.scss'


interface IPerfil {
    img: string;
    title: string;
    subtitle?: string;
    icon: string;
}

export default function SectionPerfil({ img, title, subtitle, icon }: IPerfil) {
    return (
        <div className={style.div}>
            <img src={img} alt="" />
            <div>
                <h3>{title}</h3>
                <p>{subtitle}</p>
            </div>
            <img src={icon} alt=""></img>
        </div>
    )
}