import { createContext, useContext, useState, type JSX } from 'react'
import type { SignupData } from '../datatypes/signupPage'
import {  type AuthContext, type AuthProviderProps, type AppPath , type Auth} from '../datatypes/AuthContext'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthContext  = createContext<AuthContext | undefined>(undefined);

export const useAuth = () => {
    const authenticate = useContext(AuthContext);

    if(!authenticate) {
        throw new Error(" use useAuth within useProvider ");
    }

    return authenticate;
}

export const AuthProvider = ({children} : AuthProviderProps): JSX.Element => {

    const [auth, setAuth] = useState<Auth>({
        token : null,
        user : null,
        name : null,
        isLoggedIn : false
    })

    const api = axios.create({
      baseURL : "http://localhost:5000/api",
      headers : {
        "Content-Type" : "application/json"
      },
      withCredentials : true
    })

  const [form, setForm] = useState<SignupData>({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) : void => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };


    const navigate = useNavigate();

    const goTo = (path : AppPath) : void => {
      navigate(path);
    }


    return <AuthContext.Provider value={{form, setForm, error, setError, handleChange, goTo, api, auth, setAuth}}>
        {children}
    </AuthContext.Provider>
}