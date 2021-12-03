import {
  Content,
  HeroContent,
  IconButtonSearch,
} from './styles';

function Hero() {
  return (
    <>
      <HeroContent>
        <Content>
          <h1>Ready for Trying a new recipe?</h1>
          <div>
            <input type="text" placeholder="Search healthy recipes" />
            <button>
              <IconButtonSearch />
            </button>
          </div>
        </Content>
      </HeroContent>
    </>
  )
}

export default Hero
