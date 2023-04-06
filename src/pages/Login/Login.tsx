import Botao from "../../components/Botao/Botao";
import fb_icon from "../../../public/imgs/face_icon.png";
import google_icon from "../../../public/imgs/google_icon.png";
import style from "./Login.module.scss";
import logo from "../../../public/imgs/Logo.png";



export default function Login() {

    return (
        <>
            <div className={style.div}>
                <img src={logo} alt=""/>
                <h1>Casa Planta</h1>
                <input type="text" placeholder="E-mail ou telefone"/>
                <input type="text" placeholder="Senha" />
                <Botao text="Entrar"  color='#ffffff' className={style.entrar}/>
                <div className={style.ou}>
                    <hr/>
                    <p>ou</p>
                    <hr/>
                </div>
                <Botao text="Login Facebook" bkgColor={"#1877F2"} color='#ffffff' img={fb_icon} className={style.fb_gg} />
                <Botao text="Login Google" bkgColor="#ffffff" color="#757575" img={google_icon} />
                <a href="#">Esqueceu a senha?</a>
                <div className={style.inscrever}>
                    <p>Não tem uma conta?
                        <a href="#"> Inscreva-se</a>
                    </p>
                </div>
            </div>
        </>
    )
}