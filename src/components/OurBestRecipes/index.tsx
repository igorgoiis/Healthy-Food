import ListRecipes from '../ListRecipes';
import { SectionContainer, Content } from './styles';

const OurBestRecipes = () => {
  return (
    <SectionContainer>
      <Content>
        <h1>Our Best Recipes</h1>
        <span>Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.</span>
        <ListRecipes />
      </Content>
    </SectionContainer>
  );
}

export default OurBestRecipes;