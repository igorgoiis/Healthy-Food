import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import ImageHero from '../../assets/Illustration.svg';
import { Container } from '../../styles/global';

export const HeroContent = styled.div`
  width: 100%;
  height: 80vh;
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

export const Content = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
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
  }

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    input {
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
    }

    button {
      width: 52px;
      height: 52px;
      background: var(--primary-color);
      color: var(--white);
      border: 1px solid var(--primary-color);
      border-radius: .2rem;
      transition: filter ease-in-out .2s;

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
    }


  }
  
  ${Container}
`;

export const IconButtonSearch = styled(BiSearch)`
  font-size: 1.5rem;
`;