import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/styles/global';
import { defaultTheme } from '../../assets/styles/themes/default';
import { AuthProvider } from '../../context/AuthProvider';
import { Routes } from '../../Routes';
import { Container } from './styles';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Container>
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}
export default App;
