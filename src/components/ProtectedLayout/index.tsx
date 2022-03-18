import { useAuth } from '../../context/AuthProvider/useAuth';

export function ProtectedLayout({ children }: { children: JSX.Element }) {
  const auth = useAuth();

  if (!auth.email) {
    return <h1>You do not have access</h1>;
  }

  return children;
}
