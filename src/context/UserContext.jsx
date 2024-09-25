import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth, db } from '../utils/firebase';
import { doc, getDoc } from 'firebase/firestore';

const UserDetailContext = createContext();

const UserContextProvider = ({ children }) => {
  const [userDetail, setUserDetail] = useState(null);
  const [userDbDetail, setUserDbDetail] = useState(null);

  
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const docRef = doc(db, "users", user.uid);
          const userInfo = await getDoc(docRef);
          setUserDetail(user);
          setUserDbDetail(userInfo?.data());
        } catch (error) {
          console.error("Error fetching user details from Firestore:", error);
        }
      } else {
        setUserDetail(null); 
        setUserDbDetail(null);
        console.log("User not found");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserDetailContext.Provider value={{ userDetail, userDbDetail }}>
      {children}
    </UserDetailContext.Provider>
  );
};

export { UserDetailContext };
export default UserContextProvider;

