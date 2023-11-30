/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useState, useEffect } from 'react';
import { getUser } from './utils';
import { uid } from 'uid';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [psw, setPsw] = useState('');
  const [user, setUser] = useState(getUser('user'));
  const id = uid();

  const login = () => {
    const newUser = { id: id, name: name, psw: psw };
    setUser(newUser);
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={{ name, setName, psw, setPsw, user, login }}>
      {children}
    </UserContext.Provider>
  );
};