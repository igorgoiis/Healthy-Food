import {
  ButtonSearch,
  Content,
  HeroContent,
  IconButtonSearch,
  Input,
  SearchContent,
  Title
} from './styles';

function Hero() {
  return (
    <>
      <HeroContent>
        <Content>
          <Title>Ready for Trying a new recipe?</Title>
          <SearchContent>
            <Input type="text" placeholder="Search healthy recipes" />
            <ButtonSearch>
              <IconButtonSearch />
            </ButtonSearch>
          </SearchContent>
        </Content>
      </HeroContent>
    </>
  )
}

export default Hero
