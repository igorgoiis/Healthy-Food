import styled from "styled-components";
import { Carousel } from '@trendyol-js/react-carousel';

import { Container } from "../../styles/global";

export const SectionContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 150px;
  
  h1 {
    font-family: var(--font-title);
    font-size: 2rem;
    font-weight: 700;
    line-height: 4rem;
    text-align: center;
    color: var(--black);
  }

  span {
    width: 100%;
    text-align: center;
    font-family: var(--font-body);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
    color: var(--gray);

    @media (max-width: 560px) {
      width: 100%;
    }
  }

  ${Container}
`;

export const Posts = styled(Carousel)`
  padding-bottom: 50px;
`;