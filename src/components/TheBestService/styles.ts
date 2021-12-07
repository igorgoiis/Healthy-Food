import { Link } from "react-router-dom";
import styled from "styled-components";
import ImageSection from '../../assets/bloco_services.svg';
import { Container } from '../../styles/global';

export const SectionContainer = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${ImageSection});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 0 0;
  margin-top: 50px;

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
    background-image: none;
    background-color: var(--primary-color);
    max-height: fit-content;
    height: fit-content;
  }
`;

export const Content= styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 50px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 50%;

    @media (max-width: 860px) {
      width: 45%;
    }

    @media (max-width: 767px) {
      width: 100%;
    }
  }

  h1 {
    font-family: var(--font-title);
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    color: var(--black);
    text-align: start;
    margin-bottom: 30px;

    @media (max-width: 1010px) {
      margin-bottom: 15px;
    }

    @media (max-width: 860px) {
      font-size: 1.7rem;
    }

    @media (max-width: 767px) {
      text-align: center;
    }
  }

  p {
    text-align: center;
    font-family: var(--font-body);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
    color: var(--gray);
    text-align: start;
    margin-bottom: 30px;

    @media (max-width: 1010px) {
      margin-bottom: 15px;
    }

    @media (max-width: 767px) {
      color: var(--white);
      text-align: center;
    }

    @media (max-width: 560px) {
      width: 100%;
    }
  }

  ${Container}
`;

export const Button = styled(Link)`
  width: 150px;
  text-align: center;
  padding: 14px 24px;
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6rem;
  color: var(--white);
  background-color: var(--primary-color);
  border-radius: 7px;
  border: none;

  &:hover {
    filter: brightness(.9);
  }
`;