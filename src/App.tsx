import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProtectedLayout } from './components/ProtectedLayout';
import { AuthProvider } from './context/AuthProvider';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/profile"
            element={
              <ProtectedLayout>
                <h1>You are authenticated</h1>
              </ProtectedLayout>
            }
          />

          <Route path="/login" element={<h1>aaa</h1>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
export default App;
