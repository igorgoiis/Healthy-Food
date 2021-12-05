import { Container } from './styles';

interface RecipeProps {
  recipe: {
    id: number;
    title: string;
    image: string;
  }
}

const RecipeItems = ({ recipe }: RecipeProps) => {
  return (
    <Container>
      <img src={recipe.image} alt={recipe.title} />
      <div>
        <h2>{recipe.title}</h2>
        <button>See Recipe</button>
      </div>
    </Container>
  );
}

export default RecipeItems;