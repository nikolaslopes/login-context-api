import { BrowserRouter } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/styles/global';
import { defaultTheme } from '../../assets/styles/themes/default';
import { AuthProvider } from '../../context/AuthProvider';
import { Routes } from '../../Routes';
import { Container } from './styles';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyles />
          <Container>
            <AuthProvider>
              <Routes />
            </AuthProvider>
          </Container>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}
export default App;
