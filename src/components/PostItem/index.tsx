import { Autor, Container, Picture } from './styles';

interface PostProps {
  post: {
    id: number;
    title: string;
    thumbnail: string;
    autor: {
      name: string;
      picture: string;
    }
  }
}

const PostItem = ({ post }: PostProps) => {
  return (
    <Container>
      <img src={post.thumbnail} alt={post.title} />
      <h1>{post.title}</h1>
      <Autor>
        <Picture>
          <img src={post.autor.picture} alt={post.autor.name} />
        </Picture>
        <span>{post.autor.name}</span>
      </Autor>
    </Container>
  );
}

export default PostItem;