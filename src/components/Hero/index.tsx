import {
  ButtonSearch,
  Content,
  HeroContent,
  IconButtonSearch,
  Input,
  Title
} from './styles';

function Hero() {
  return (
    <>
      <HeroContent>
        <Content>
          <Title>Ready for Trying a new recipe?</Title>
          <div>
            <Input type="text" placeholder="Search healthy recipes" />
            <ButtonSearch>
              <IconButtonSearch />
            </ButtonSearch>
          </div>
        </Content>
      </HeroContent>
    </>
  )
}

export default Hero
