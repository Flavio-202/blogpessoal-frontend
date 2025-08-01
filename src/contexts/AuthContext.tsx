﻿import { ReactNode, createContext, useState } from "react";
import type UsuarioLogin from "../models/UsuarioLogin";
import { login } from "../services/Service";

interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    isLoading: boolean
}

interface AuthProvidersProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProvidersProps) {

    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        token: ''
    })

    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(usuarioLogin: UsuarioLogin) {
        setIsLoading(true)

        try {
            await login(`/usuarios/logar`, usuarioLogin, setUsuario)
            alert("O Usuário foi autenticado com sucesso!")
        } catch (error) {
            console.log(error)
            alert("Os dados do Usuário estão inconsistentes!")
        }

        setIsLoading(false)
        
    }

    function handleLogout() {
        setUsuario({
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
            token: ''
        })
    }

    return(
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading}}>
            {children}
        </AuthContext.Provider>
    )
}