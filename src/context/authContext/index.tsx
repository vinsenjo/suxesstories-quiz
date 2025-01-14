import { auth } from '@/libs/firebase/init';
import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useContext } from 'react';
import { useEffect, useState } from 'react'
const AuthContext = createContext<{
    currentUser: any;
    userLogin: boolean;
    loading: boolean;
} | null>(null);


export function useAuth() {
    return useContext(AuthContext)
}

const AuthProvider = ({ children }: { children: any }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [userLogin, setUserLogin] = useState(false)
    const [loading, setLoading] = useState(false)



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, initializeUser);
        return unsubscribe
    }, [])

    async function initializeUser(user: any) {
        if (user) {
            setCurrentUser({ ...user });
            setUserLogin(true)
        } else {
            setCurrentUser(null)
            setUserLogin(false)
        }
        setLoading(false)
    }

    const value = {
        currentUser,
        userLogin,
        loading
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export { AuthProvider }
