import style from './Botao.module.scss'

interface IBotaoProps {
    text: string;
    bkgColor?: string;
    color: string;
    img?: string;
    className?: string;
    id?: string;
}

export default function Botao({ text, bkgColor, color, img, className }: IBotaoProps) {
    return (
        <button className={`${style.button} ${className}`} style={{ backgroundColor: bkgColor, color: color }}>
            {img && <img src={img} alt="Botão" className={style.image} />}
            {text}
        </button>
    )
}