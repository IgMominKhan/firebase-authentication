import {useState, createContext, useEffect} from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import  auth  from "../firebase/firebase.js";

export const AuthContext = createContext(null);


const Providers = ({children}) => {
  const [user, setUser] = useState(null); 


  const authInfo = {user,setUser,registerUser,logIn,logOut};
  
  // create user
  function registerUser(email,password) {
    return createUserWithEmailAndPassword(auth,email,password)
  }

  // log in user
  function logIn(email,password) {
    return signInWithEmailAndPassword(auth,email,password)
  }

  // log out user
  function logOut() {
    return singOut(auth);
  }

  // handle user state change
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
      if(currentUser){
        setUser(currentUser)
      }else {
        console.log('user is signed out')
        setUser(null)
      }
    })

    return () => {
      unSubscribe()
    }
  }, [])


  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default Providers
