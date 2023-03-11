import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';

import { LinkStyled, MenuList, NavbarWrapper } from './Navbar.styled';

import items from './items';

const Navbar = () => {
  const elements = items.map(({ id, text, link }) => (
    <li key={id}>
      <LinkStyled to={link}>{text}</LinkStyled>
    </li>
  ));

  return (
    <NavbarWrapper>
      <MenuList>{elements}</MenuList>
      <NavbarAuth />
      <NavbarUser />
    </NavbarWrapper>
  );
};

export default Navbar;
