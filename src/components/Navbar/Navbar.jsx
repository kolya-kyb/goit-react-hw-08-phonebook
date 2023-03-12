import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';

import { LinkStyled, MenuList, NavbarWrapper } from './Navbar.styled';

import items from './items';
import { useSelector } from 'react-redux';


const Navbar = () => {
const isLogin = useSelector(state =>state.auth.isLogin);

  const filteredItems = !isLogin ? items.filter(item => !item.private) : items;
  const elements = filteredItems.map(({ id, text, link }) => (
    <li key={id}>
      <LinkStyled to={link}>{text}</LinkStyled>
    </li>
  ));

  return (
    <NavbarWrapper>
      <MenuList>{elements}</MenuList>
      {isLogin?         <NavbarUser />
        :<NavbarAuth />}
    </NavbarWrapper>
  );
};

export default Navbar;
