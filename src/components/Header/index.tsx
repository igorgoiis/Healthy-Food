import { HeaderContainer, Content, Logo, Menu } from './styles';

function Header() {
  return (
    <HeaderContainer>
      <Content>
        <Logo><a href="/">Healthy Food</a></Logo>
        <Menu>
          <ul>
            <li><a href="/#" >Healthy Recipes</a></li>
            <li><a href="/#" >Blog</a></li>
            <li><a href="/#" >Join</a></li>
            <li><button>Register</button></li>
          </ul>
        </Menu>
      </Content>
    </HeaderContainer>
  )
}

export default Header;