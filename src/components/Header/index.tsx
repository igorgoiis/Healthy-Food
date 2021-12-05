import { useState } from 'react';
import {
  HeaderContainer,
  Content,
  Logo,
  NavMenu,
  MobileIcon,
  LinkMenu,
  LinkMenuRegister,
  IconCloseMenuMobile,
  IconOpenMenuMobile
} from './styles';

function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
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
            {click ? <IconCloseMenuMobile /> : <IconOpenMenuMobile />}
          </MobileIcon>
        </Content>
      </HeaderContainer>
  )
}

export default Header;