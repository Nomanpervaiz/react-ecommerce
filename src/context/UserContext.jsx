import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../utils/firebase';

const UserDetailContext = createContext();

const UserContextProvider = ({ children }) => {
  const [userDetail, setUserDetail] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserDetail(user);
      } else {
        console.log("User not found");
        setUserDetail(null); // Set to null if no user
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <UserDetailContext.Provider value={userDetail}>
      {children}
    </UserDetailContext.Provider>
  );
};

export { UserDetailContext };
export default UserContextProvider;
