import jwt_decode from "jwt-decode"
import { useEffect, useState, createContext, useContext } from "react";
import { Link } from "react-router-dom"
import { useNavigate, Outlet } from "react-router-dom";


interface ICredential {
    credential: string;
}

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


declare const google: any;
export const UserContext = createContext({} as IUserContextData); /* iniciar contexto vazio, mas com tipo do IUserContextData */


export function UserProvider({ children }: IUserProviderProps) {
    const [user, setUser] = useState<IUser | undefined>();
    const navigate = useNavigate();


    const isAuthenticated = !!user; //!! => transformando a variável em um booleano
    if (isAuthenticated) {
        console.log(`Usuário autenticado`)
        navigate('/perfil')

    
    }

    return (
        <UserContext.Provider value={{user,setUser,isAuthenticated}}>
            {children}
        </UserContext.Provider>
    );
}

export const useUserAuthenticationContext = () => useContext(UserContext);