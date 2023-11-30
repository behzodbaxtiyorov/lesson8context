import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Add from './Pages/Add';
import Cards from './Pages/Cards';
import Service from './Pages/Service';
import Error from './Pages/Error';
import Login from './Components/Login';
import { useEffect, useState } from 'react';
import { getUser } from './utils';
import { uid } from 'uid';
import ProtectedRoute from './Components/ProtectedRoute';
import { UserProvider } from './context'; // UserProvider ni import qo'shish

function App() {
  // eslint-disable-next-line no-unused-vars
  const [name, setName] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [psw, setPsw] = useState('');
  const id = uid();

  const [user, setUser] = useState(getUser('user'));

  // eslint-disable-next-line no-unused-vars
  const login = () => {
    const newUser = { id: id, name: name, psw: psw };
    setUser(newUser);
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <UserProvider> 
      <>
        <Navbar user={user} />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/add"
            element={
              <ProtectedRoute user={user}>
                <Add />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cards"
            element={
              <ProtectedRoute user={user}>
                <Cards />
              </ProtectedRoute>
            }
          />
          <Route path="/service" element={<Service />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </>
    </UserProvider>
  );
}

export default App;