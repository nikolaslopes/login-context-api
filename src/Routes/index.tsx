import { Routes as RoutesWrapper, Route } from 'react-router-dom';

import { ProtectedLayout } from '../components/ProtectedLayout';
import { Home } from '../Pages/Home';
import { Login } from '../Pages/Login';

export function Routes() {
  return (
    <RoutesWrapper>
      <Route
        path="/profile"
        element={
          <ProtectedLayout>
            <h1>You are authenticated :)</h1>
          </ProtectedLayout>
        }
      />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </RoutesWrapper>
  );
}
