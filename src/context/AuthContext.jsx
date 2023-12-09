import { createContext, useContext, useState } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'

const AuthContext = createContext()

export function AuthContextProvider ({ children }) {
    const [user, setUser] = useState({})

    function signup(email, password) {

    }
    return <AuthContext.Provider value ={{}}>{children}</AuthContext.Provider>
}

export function UserAuth() {
    return useContext(AuthContext)
}