import { ThemeProvider } from 'styled-components';

import { GlobalStyle, lightTheme, darkTheme, devices } from '../utils';
import useDarkMode from '../hooks/useDarkMode';
import NavBar from '../components/navbar';
import MobileNav from './mobile-nav';
import Footer from './footer';
import { DesktopWrapper, MobileWrapper } from '../elements/containers';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [theme, setTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <DesktopWrapper>
        <NavBar theme={theme} setTheme={setTheme} />
      </DesktopWrapper>
      <MobileWrapper>
        <MobileNav theme={theme} setTheme={setTheme} />
      </MobileWrapper>
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
