import { Container, Content, Logo, Menu } from './styles';

function Header() {
  return (
    <Container>
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
    </Container>
  )
}

export default Header;