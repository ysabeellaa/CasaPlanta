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



export default function Login() {
    
    const { setUser } = useUserAuthenticationContext(); //desestruturação da função useUserAuthenticationContext() do contexto de autenticação de usuário para a variável setUser.
    
    //recebe a resposta da autenticação do usuário e decodifica o token JWT da credencial. Em seguida, a função atualiza o estado do usuário com as informações decodificadas
    function handleCallbackResponse(response: ICredential) {
        var userObject = jwt_decode(response.credential) as IUser;
        // console.log(userObject)
        setUser(userObject)
        
    }
    

    
    // inicializar e renderizar o botão de login do Google. O método google.accounts.id.initialize() é usado para inicializar a API de autenticação do Google com o client_id fornecido. O método google.accounts.id.renderButton() é usado para renderizar o botão de login do Google na página. A callback handleCallbackResponse é chamada quando o usuário efetua o login com sucesso.
    //console.log(import.meta.env.VITE_GOOGLE_CLIENT_ID);
    useEffect(() => {
        // global google
        google.accounts.id.initialize({
            client_id: (import.meta.env.VITE_GOOGLE_CLIENT_ID),
            callback: handleCallbackResponse
        });
//
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