import React, { createContext, useEffect, useState } from "react";
import usersData from "../data/users.json";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");

    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem("users");

    return storedUsers ? JSON.parse(storedUsers) : usersData;
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const register = (newUser) => {
    const existingUser = users.find(
      (existingUser) =>
        existingUser.email.toLowerCase() === newUser.email.toLowerCase(),
    );

    if (existingUser) {
      return {
        success: false,
        message: "Email already registered",
      };
    }

    const user = {
      id: Date.now(),
      ...newUser,
    };

    setUsers([...users, user]);

    return {
      success: true,
      message: "Registration successful",
    };
  };

  const login = (email, password) => {
    const foundUser = users.find(
      (user) =>
        user.email.toLowerCase() === email.toLowerCase() &&
        user.password === password,
    );

    if (!foundUser) {
      return {
        success: false,
        message: "Invalid email or password",
      };
    }

    setUser(foundUser);

    localStorage.setItem("user", JSON.stringify(foundUser));

    return {
      success: true,
      message: "Login successful",
    };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };
  const updateUser = (updatedUser) => {
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));

    setUsers((currentUsers) =>
      currentUsers.map((existingUser) =>
        existingUser.id === updatedUser.id ? updatedUser : existingUser,
      ),
    );
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        register,
        login,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
