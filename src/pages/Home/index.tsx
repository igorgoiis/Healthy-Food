import Hero from '../../components/Hero';
import OurBestRecipes from '../../components/OurBestRecipes';
import TheBestService from '../../components/TheBestService';
import { Container } from './styles';

const Home = () => {
  return (
    <Container>
      <Hero />
      <OurBestRecipes />
      <TheBestService />
    </Container>
  );
}

export default Home;