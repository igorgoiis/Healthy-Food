import Hero from '../../components/Hero';
import OurBestRecipes from '../../components/OurBestRecipes';
import { Container } from './styles';

const Home = () => {
  return (
    <Container>
      <Hero />
      <OurBestRecipes />
    </Container>
  );
}

export default Home;