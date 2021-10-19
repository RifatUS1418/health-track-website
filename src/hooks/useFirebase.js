import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        })
        return unsubscribe;
    }, []);

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setError('');
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const loginProcess = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setError('')
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    return {
        user,
        setUser,
        email,
        setEmail,
        password,
        setPassword,
        error,
        setError,
        loginProcess,
        setName,
        setUserName,
        registerNewUser,
        signInUsingGoogle,
        logOut
    }

}

export default useFirebase;