import jwt_decode from "jwt-decode"
import { useEffect, useState, createContext } from "react";
import { Link } from "react-router-dom"
import { useNavigate, Outlet } from "react-router-dom";

declare const google: any;

export const UserContext = createContext<IUser | null>(null);

interface ICredential {
    credential: string
}

interface IUser {
    name: string;
    picture: string;
}

interface IUserProviderProps {
    children: React.ReactNode;
}

export function UserProvider({ children }: IUserProviderProps) {
    const [user, setUser] = useState<IUser| null>(null);
    
    function handleCallbackResponse(response: ICredential) {
        var userObject = jwt_decode(response.credential) as IUser;
        setUser(userObject);
        // const navigate = useNavigate();
        // navigate('/perfil');
        
    }

    useEffect(() => {
        google.accounts.id.initialize({
            client_id: '584902510322-hv97imddr9la7fo7gqd89kk0v8khkkm2.apps.googleusercontent.com',
            callback: handleCallbackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById('google'), {
            theme: "outline",
            size: "large",
            text: "signin",
        });

    }, []);

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
}
