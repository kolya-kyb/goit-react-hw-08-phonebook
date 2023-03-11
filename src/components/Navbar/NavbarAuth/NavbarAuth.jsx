import { LinkStyled } from '../Navbar.styled';

const NavbarAuth = () => {
  return (
    <div>
      <LinkStyled to="/register">Register</LinkStyled> |{' '}
      <LinkStyled to="/login">Login</LinkStyled>
    </div>
  );
};

export default NavbarAuth;
