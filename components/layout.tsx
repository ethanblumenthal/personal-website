import NavBar from '../components/navbar';
import { GlobalStyle } from '../utils/Global';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <GlobalStyle />
    <NavBar />
    <main>{children}</main>
  </>
);

export default Layout;
