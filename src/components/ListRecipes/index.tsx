import { Container } from './styles';
import ImageComida1 from '../../assets/comida_1.svg';
import ImageComida2 from '../../assets/comida_2.svg';
import ImageComida3 from '../../assets/comida_3.svg';
import ImageComida4 from '../../assets/comida_4.svg';
import RecipeItems from '../RecipeItems';


const recipes = [
  {
    id: 1,
    title: 'Broccoli Salad with Bacon',
    image: ImageComida1
  },
  {
    id: 2,
    title: 'Classic Beef Burgers',
    image: ImageComida2
  },
  {
    id: 3,
    title: 'Classic Potato Salad',
    image: ImageComida3
  },
  {
    id: 4,
    title: 'Cherry Cobbler on the Grill',
    image: ImageComida4
  },
]

const ListRecipes = () => {
  return (
    <Container>
      {recipes.map(recipe => (
        <RecipeItems key={recipe.id} recipe={recipe} />
      ))}
    </Container>
  );
}

export default ListRecipes;