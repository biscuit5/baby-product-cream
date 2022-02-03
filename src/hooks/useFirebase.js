import { useEffect, useState } from "react";



import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged,signOut } from "firebase/auth";
import initializeFirebase from "./../pages/Login/Login/Firebase/firebase.init";



  initializeFirebase();

const useFirebase =()=>{

        const [user,setUser] = useState({});
        const [isLoading,setIsLoading] = useState(true);

        const [authError,setAuthError] = useState('')

        const auth = getAuth();

        const newUser = (email,password)=> {
                   setIsLoading(true)
                createUserWithEmailAndPassword(auth,email,password)
                .then((userCredential) => {

                        setAuthError('')

                      })
                      .catch((error) => {

                        setAuthError (error.message);

                      })
                      .finally(()=>setIsLoading(false));

        };
        const signUser = (email,password,location,navigate ) =>{
                isLoading(true)
                signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {

                  const destination = location?.state?.from || '/';
                  navigate(destination);

                  setAuthError('')
                })
                .catch((error) => {

                 setAuthError (error.message);
                })
                .finally(()=>setIsLoading(false));

        }
        useEffect(()=>{

                const unsubscribe = onAuthStateChanged(auth, user => {
                        if(user){
                                setUser(user);
                        }
                        else{

                                setUser('');
                        }
                        setIsLoading(false)
                      });

                return()=>unsubscribe;

        },[auth,user])

        const logOut = ()=>{
                setIsLoading(true)
                signOut(auth).then(() => {
                        // Sign-out successful.
                      }).catch((error) => {
                        // An error happened.
                      })
                      .finally(()=> setIsLoading(false));

        }

       return {
                user,
                isLoading,
                authError,
                newUser,
                signUser,
                logOut

       };
};
export default useFirebase;
