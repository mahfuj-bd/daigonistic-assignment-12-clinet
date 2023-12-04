import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, SetUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const creatUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const setName = (name) =>{
    return updateProfile(auth.currentUser, {
      dispplayName : name
    })
  }
    const setPhoto = (photo) =>{
      return updateProfile(auth.currentUser, {
        dispplayName : photo
      })
  }
  
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      SetUser(currentUser)
      setLoading(false)
    });
    return () => {
      unSubscribe();
    };
  }, []);
  console.log(user);
  const authInfo = {
    user,
    creatUser,
    signIn,
    logOut,
    loading,
    setName,
    setPhoto
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
