import { GlobalStyle } from '../utils/Global';
import NavBar from '../components/navbar';
import Footer from './footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <GlobalStyle />
    <NavBar />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
