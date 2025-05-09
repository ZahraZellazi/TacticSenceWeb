import { Outlet } from 'react-router-dom';
import { Footer } from "./footer";
import { Header } from "./header";

export const Layout = () => {
  return (
    <div className="wrapper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
