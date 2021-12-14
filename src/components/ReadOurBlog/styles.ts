import styled from "styled-components";
import Carousel from "react-elastic-carousel";

import { Container } from "../../styles/global";

export const SectionContainer = styled.div`
  background-color: #FAFAFC;
`;

export const Content = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 150px;
  
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
`

export const CustomCarousel = styled(Carousel)`
  .rec.rec-slider-container::after {
    content: '';
    position: absolute;
    width: 18%;
    height: 100%;
    top: 0;
    right: -20px;
    background-image: linear-gradient(90deg, transparent -4%, #FAFAFC 90%);
  }
`;
