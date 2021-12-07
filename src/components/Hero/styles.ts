import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import ImageHero from '../../assets/Illustration.svg';
import { Container } from '../../styles/global';

export const HeroContent = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${ImageHero});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 100% 0;

  @media (max-width: 1165px) {
    & {
      max-height: 650px;
    }
  }

  @media (max-width: 1110px) {
    & {
      max-height: 550px;
    }
  }

  @media (max-width: 1010px) {
    & {
      max-height: 450px;
    }
  }

  @media (max-width: 790px) {
    & {
      max-height: 425px;
    }
  }

  @media (max-width: 767px) {
    & {
      background-image: none;
    }
  }
`;

export const Content = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 767px) {
    align-items: center;
    text-align: center;
  }

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
        width: 18rem;
        font-size: 2rem;
        line-height: 3.3rem;
      }
    }

    @media (max-width: 767px) {
      width: 50%;
      text-align: center;
    }

    @media (max-width: 566px) {
      width: 55%;
    }

    @media (max-width: 520px) {
      width: 60%;
    }

    @media (max-width: 482px) {
      width: 65%;
    }

    @media (max-width: 449px) {
      width: 70%;
    }

    @media (max-width: 421px) {
      width: 75%;
    }

    @media (max-width: 397px) {
      width: 80%;
    }

    @media (max-width: 376px) {
      width: 85%;
    }

    @media (max-width: 357px) {
      width: 90%;
    }

    @media (max-width: 341px) {
      width: 95%;
    }

    @media (max-width: 326px) {
      width: 100%;
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