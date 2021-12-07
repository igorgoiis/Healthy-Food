import { Carousel } from '@trendyol-js/react-carousel';

import { SectionContainer } from './styles';

const ReadOurBlog = () => {
  return (
    <SectionContainer>
      <h1>Read Our Blog</h1>
      <span>Far far away, behind the word mountains, far from the countries <br />
Vokalia and Consonantia, there live the blind texts.</span>

      <Carousel  slide={3} swiping={true} show={3.5}>
        <div>
          <h1>Teste 1</h1>
        </div>
        <div>
          <h1>Teste 2</h1>
        </div>
        <div>
          <h1>Teste 3</h1>
        </div>
        <div>
          <h1>Teste 4</h1>
        </div>
        <div>
          <h1>Teste 5</h1>
        </div>
      </Carousel>
    </SectionContainer>
  );
}

export default ReadOurBlog;