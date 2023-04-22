import React from 'react'
import styles from './Footer.module.scss'
import cardapio from "../../../public/imgs/cardapio.png"
import configuration from "../../../public/imgs/configuration.png"
import user from "../../../public/imgs/user.png"
import { Link } from 'react-router-dom'


export default function Footer() {
    return (
        <div className={styles.containerFooter}>
            <Link to="/cardapio">
                <img src={cardapio} alt="" />
            </Link>
            <Link to="/historico">
                <img src={configuration} alt="" />
            </Link>
            <Link to="/perfil">
                <img src={user} alt="" />
            </Link>
        </div>
    )
}
