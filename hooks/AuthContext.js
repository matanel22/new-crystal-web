"use client";

import React, { createContext, useContext, useState } from "react";

// Create a context for authentication
const AuthContext = createContext();

// Custom hook to access the AuthContext
export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  // const {fetchUser} = useAuth(); // Assume `fetchUser` is a function from useAuth to get the user
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //     const getUser = async () => {
  //         try {
  //             const fetchedUser = await fetchUser();
  //             setUser(fetchedUser);
  //         } catch (error) {
  //             console.error('Failed to fetch user:', error);
  //         } finally {
  //             setLoading(false);
  //         }
  //     };

  //     getUser();
  // }, [fetchUser]);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
