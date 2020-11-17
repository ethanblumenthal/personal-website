import styled, { ThemeProvider } from 'styled-components';

import { GlobalStyle, lightTheme, darkTheme } from '../utils';
import useDarkMode from '../hooks/useDarkMode';
import NavBar from '../components/navbar';
import MobileNav from './mobile-nav';
import Footer from './footer';

const Desktop = styled.div`
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const Mobile = styled.div`
  @media screen and (min-width: 500px) {
    display: none;
  }
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [theme, setTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <Desktop>
        <NavBar theme={theme} setTheme={setTheme} />
      </Desktop>
      <Mobile>
        <MobileNav setTheme={setTheme} />
      </Mobile>
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
