import { useAuth } from '../../context/AuthProvider/useAuth';

export const ProtectedLayout = () => {
  const auth = useAuth();

  if (!auth.email)
};
