import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';


function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/profile" />

          <Route path="/login"/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App;
