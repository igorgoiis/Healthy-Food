import styled from "styled-components";

import BackgroundSection from '../../assets/bloco_final_image.svg';

import { Container } from "../../styles/global";

export const SectionContainer = styled.section`
  width: 100%;
  height: 100vh;
  max-height: 875px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${BackgroundSection});
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
  h3 {
    font-family: var(--font-title);
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.7rem;
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
      border: 1px solid #707070;
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
      padding: 1rem 2rem;
      background: var(--primary-color);
      font-size: 1rem;
      color: var(--white);
      border: 1px solid var(--primary-color);
      border-radius: 5px;
      box-shadow: 0px 5px 20px -5px var(--primary-color);
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
`;