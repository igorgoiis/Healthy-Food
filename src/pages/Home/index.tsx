import Hero from '../../components/Hero';
import OurBestRecipes from '../../components/OurBestRecipes';
import ReadOurBlog from '../../components/ReadOurBlog';
import TheBestService from '../../components/TheBestService';
import JoinOurMembership from '../../components/JoinOurMembership';

import { Container } from './styles';

const Home = () => {
  return (
    <Container>
      <Hero />
      <OurBestRecipes />
      <TheBestService />
      <ReadOurBlog />
      <JoinOurMembership />
    </Container>
  );
}

export default Home;