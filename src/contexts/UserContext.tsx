import {  useState, createContext, useContext, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";




interface IUser {
    name: string;
    picture: string;
}

interface IUserContextData{
    user?: IUser;
    setUser: (user: IUser)=> void;
    isAuthenticated: boolean;
}

interface IUserProviderProps {
    children: React.ReactNode;
}

//a biblioteca de autenticação do Google precisa ser carregada no ambiente do navegador para que possa ser usada
declare const google: any;

export const UserContext = createContext({} as IUserContextData); /* iniciar contexto vazio, mas com tipo do IUserContextData */


export function UserProvider({ children }: IUserProviderProps) {
    const [user, setUser] = useState<IUser | undefined>();
    const navigate = useNavigate();


    const isAuthenticated = !!user; //!! => transformando a variável em um booleano


    
    useEffect(() => {
        if (isAuthenticated) {
            console.log(`Usuário autenticado`)
            navigate('/perfil')
    
        
        }
    }, [isAuthenticated]);

    return (
        <UserContext.Provider value={{user,setUser,isAuthenticated}}>
            {children}
        </UserContext.Provider>
    );
}

export const useUserAuthenticationContext = () => useContext(UserContext);
//obter o contexto do usuário em um componente filho