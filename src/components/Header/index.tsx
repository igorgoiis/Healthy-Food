import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

import { HeaderContainer, Content, Logo, NavMenu, MobileIcon, LinkMenu, LinkMenuRegister } from './styles';

function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <IconContext.Provider value={{ color: '#FFF' }}>
      <HeaderContainer>
        <Content>
          <Logo to="/">Healthy Food</Logo>
          <NavMenu click={click}>
            <ul>
              <li>
                <LinkMenu to="/" >Healthy Recipes</LinkMenu>
              </li>
              <li>
                <LinkMenu to="/" >Blog</LinkMenu>
              </li>
              <li>
                <LinkMenu to="/" >Join</LinkMenu>
              </li>
              <li>
                <LinkMenuRegister to="/">Register</LinkMenuRegister>
              </li>
            </ul>
          </NavMenu>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
        </Content>
      </HeaderContainer>
    </IconContext.Provider>
  )
}

export default Header;