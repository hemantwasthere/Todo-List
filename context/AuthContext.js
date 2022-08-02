import React, { useContext, useState, useEffect, useRef } from 'react'
import { auth, db, googleProvider } from '../firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup } from 'firebase/auth'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)
    const [googleUser, setGoogleUser] = useState(null)
    const [loading, setLoading] = useState(true)

    async function signup(email, password) {
        const response = await createUserWithEmailAndPassword(auth, email, password)
        return response
    }

    async function signInWithGoogle() {
        await signInWithPopup(auth, googleProvider).then(res => setGoogleUser(res.user))
    }

    async function login(email, password) {
        const response = await signInWithEmailAndPassword(auth, email, password)
        return response
    }

    async function logout() {
        const response = await signOut(auth)
        setGoogleUser(null)
        return response
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        login,
        signup,
        logout,
        signInWithGoogle,
        googleUser
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}