import { ThemeProvider } from 'styled-components';

import { GlobalStyle, lightTheme, darkTheme } from '../utils';
import useDarkMode from '../hooks/useDarkMode';
import NavBar from '../components/navbar';
import Footer from './footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [theme, setTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <NavBar theme={theme} setTheme={setTheme} />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
