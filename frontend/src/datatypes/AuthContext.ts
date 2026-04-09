import React from "react";
import type { SignupData } from "./signupPage";
import type { AxiosInstance } from "axios";

export interface AuthContext {
    form : SignupData;
    setForm : React.Dispatch<React.SetStateAction<SignupData>>;
    error : string;
    setError : React.Dispatch<React.SetStateAction<string>>;
    handleChange : (e : React.ChangeEvent<HTMLInputElement>) => void;
    goTo : (path : AppPath ) => void,
    api : AxiosInstance,
    auth : Auth,
    setAuth : React.Dispatch<React.SetStateAction<Auth>>
}

export interface AuthProviderProps {
    children : React.ReactNode
}

export interface Auth {
    token : string | null,
    user : object | null,
    name : string | null,
    isLoggedIn : boolean
}

export type AppPath = "login" | "signup" | "home" | "dashboard" | "about";