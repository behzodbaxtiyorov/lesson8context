import { useContext } from 'react';
import { UserContext } from '../context';

export default function Login() {
  const { name, setName, psw, setPsw, login } = useContext(UserContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <div className="login-page">
      <form className="register-form" action="" onSubmit={handleLogin}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          value={psw}
          onChange={(e) => setPsw(e.target.value)}
        />
        <br />
        <button type="submit">login</button>
      </form>
    </div>
  );
}