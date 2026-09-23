import { Link, Outlet } from 'react-router-dom';
import Navbar from './StyledNavbar';
const SharedLayout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  );
};
export default SharedLayout;