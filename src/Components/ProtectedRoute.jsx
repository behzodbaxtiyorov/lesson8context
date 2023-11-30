import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context';

export default function ProtectedRoute({ children }) {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  if (!user) return navigate('/');
  return children;
}