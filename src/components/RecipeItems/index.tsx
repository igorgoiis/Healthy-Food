import { Container, ButtonSeeRecipe, ContainerMobile} from './styles';

interface RecipeProps {
  recipe: {
    id: number;
    title: string;
    image: string;
  }
}

const RecipeItems = ({ recipe }: RecipeProps) => {
  return (
    <>
    <Container>
      <img src={recipe.image} alt={recipe.title} />
      <div>
        <h2>{recipe.title}</h2>
        <ButtonSeeRecipe to="/">See Recipe</ButtonSeeRecipe>
      </div>
    </Container>

    <ContainerMobile to="/">
      <img src={recipe.image} alt={recipe.title} />
      <div>
        <h2>{recipe.title}</h2>
      </div>
    </ContainerMobile>
    </>
  );
}

export default RecipeItems;