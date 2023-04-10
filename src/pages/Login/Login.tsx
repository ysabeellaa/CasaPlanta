import Botao from "../../components/Botao/Botao";
import fb_icon from "../../../public/imgs/face_icon.png";
import google_icon from "../../../public/imgs/google_icon.png";
import style from "./Login.module.scss";
import logo from "../../../public/imgs/Logo.png";
import jwt_decode from "jwt-decode"
import { useEffect, useState, useContext } from "react";
import { useUserAuthenticationContext } from "../../contexts/UserContext";

declare const google: any;

interface ICredential {
    credential: string
}

interface IUser {
    name: string;
    picture: string;
}



//584902510322-hv97imddr9la7fo7gqd89kk0v8khkkm2.apps.googleusercontent.com 
export default function Login() {

    const { setUser } = useUserAuthenticationContext();

    function handleCallbackResponse(response: ICredential) {
        

        var userObject = jwt_decode(response.credential) as IUser;
        console.log(userObject)
        setUser(userObject)

    }

    useEffect(() => {
        // global google
        google.accounts.id.initialize({
            client_id: '584902510322-t85nflb9pb1s98h4m6a8j9qe9rovp1jo.apps.googleusercontent.com',
            callback: handleCallbackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById('google'),
            {
                theme: 'outline',
                size: 'large',
                shape: "retangle",
                width: 266,
            }
        );


    }, [])



    return (
        <>
            <div className={style.div}>
                <img src={logo} alt="" />
                <h1>Casa Planta</h1>
                <input type="text" placeholder="E-mail ou telefone" />
                <input type="text" placeholder="Senha" />
                <Botao text="Entrar" color='#ffffff' className={style.entrar} />
                <div className={style.ou}>
                    <hr />
                    <p>ou</p>
                    <hr />
                </div>
                <Botao text="Login Facebook" bkgColor={"#1877F2"} color='#ffffff' img={fb_icon} className={style.fb_gg} />

                <div id="google"></div>
                
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