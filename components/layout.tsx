import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, lightTheme, darkTheme } from '../utils';
import useDarkMode from '../hooks/useDarkMode';
import NavBar from '../components/navbar';
import MobileNav from './mobile-nav';
import Footer from './footer';
import { DesktopWrapper, MobileWrapper } from '../elements/containers';

interface LayoutProps {
  pageTitle: string;
  description: string;
  children: React.ReactNode;
}

const Layout = ({ pageTitle, description, children }: LayoutProps) => {
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
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{pageTitle}</title>
      </Head>
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
