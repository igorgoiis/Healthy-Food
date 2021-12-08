// import { Carousel } from '@trendyol-js/react-carousel';

import Thumb1 from '../../assets/blog_image_1.svg';
import Thumb2 from '../../assets/bloco_image_2.svg';
import Thumb3 from '../../assets/bloco_image_3.svg';
import Thumb4 from '../../assets/bloco_image_4.svg';
import Profile1 from '../../assets/profile-1.jpg';
import Profile2 from '../../assets/profile-2.jpg';
import Profile3 from '../../assets/profile-3.jpg';
import Profile4 from '../../assets/profile-4.jpg';

import { SectionContainer, Posts } from './styles';
import PostItem from '../PostItem';

const posts = [
  {
    id: 1,
    title: 'Quick-start guide to nuts and seeds',
    thumbnail: Thumb1,
    autor: {
      name: 'Kevin Ibrahim',
      picture: Profile1,
    }
  },
  {
    id: 2,
    title: 'Nutrition: Tips for Improving Your Health',
    thumbnail: Thumb2,
    autor: {
      name: 'Mike Jackson',
      picture: Profile2,
    }
  },
  {
    id: 3,
    title: 'The top 10 benefits of eating healthy',
    thumbnail: Thumb3,
    autor: {
      name: 'Bryan McGregor',
      picture: Profile3,
    }
  },
  {
    id: 4,
    title: 'Quick-start guide to nuts and seeds',
    thumbnail: Thumb4,
    autor: {
      name: 'Kevin Ibrahim',
      picture: Profile4,
    }
  }
];

const ReadOurBlog = () => {
  return (
    <SectionContainer>
      <h1>Read Our Blog</h1>
      <span>Far far away, behind the word mountains, far from the countries <br />
Vokalia and Consonantia, there live the blind texts.</span>

      <Posts  slide={3} swiping={true} show={3.5} infinite={true} >
        {posts.map(post => <PostItem post={post} key={post.id} /> )}
      </Posts>
    </SectionContainer>
  );
}

export default ReadOurBlog;