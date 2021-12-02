import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import ImageHero from '../../assets/Illustration.svg';

export const HeroContent = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 768px;  
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${ImageHero});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 100% 0;

  @media (max-width: 1265px) {
    & {
      max-height: 650px;
    }
  }

  @media (max-width: 1080px) {
    & {
      max-height: 550px;
    }
  }

  @media (max-width: 890px) {
    & {
      max-height: 425px;
    }
  }
`;

export const Content = styled.div`
  width: 1080px;
  height: fit-content;
  max-height: 768px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;

  @media (max-width: 1100px) {
    & {
      padding: 1.25rem;
    }
  }

  @media (max-width: 970px) {
  }
`;

export const Title = styled.h1`
  width: 20rem;
  font-family: var(--font-title);
  font-size: 3rem;
  font-weight: 900;
  line-height: 4.3rem;
  color: var(--black);
  margin-bottom: 2rem;
  
  @media (max-width: 970px) {
    & {
      font-size: 2rem;
      line-height: 3.3rem;
    }
  }
`;

export const SearchContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const Input = styled.input`
  min-width: 343px;
  min-height: 52px;
  margin-right: 1rem;
  padding: 1rem;
  border: 1px solid var(--black);
  border-radius: .2rem;
  font-size: 1rem;

  &::placeholder {
    font-family: var(--font-body);
    color: var(--gray);
  }

  @media (max-width: 970px) {
    & {
      min-width: 243px;
      min-height: 42px;
      padding: .6rem;
    }
  }
`;

export const ButtonSearch = styled.button`
  width: 52px;
  height: 52px;
  background: var(--primary-color);
  color: var(--white);
  border: 1px solid var(--primary-color);
  border-radius: .2rem;
  transform: filter ease-in-out .2s;

  &:hover {
    filter: brightness(.9);
  }

  @media (max-width: 970px) {
    & {
      max-width: 42px;
      max-height: 42px;
      padding: .65rem;
    }
  }
`;

export const IconButtonSearch = styled(BiSearch)`
  font-size: 1.5rem;
`;