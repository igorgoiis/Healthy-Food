import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import ImageHero from '../../assets/Illustration.svg';

export const HeroContent = styled.div`
  display: flex;
  background-image: url(${ImageHero});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 100% 0;
`;

export const Content = styled.div`
  width: 1080px;
  height: 100vh;
  max-height: 768px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

export const Title = styled.h1`
  width: 20rem;
  font-family: var(--font-title);
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 3rem;
  color: var(--black);
  margin-bottom: 2rem;
`;

export const Input = styled.input`
  margin-right: .5rem;
  padding: .5rem 1rem;
  border: 1px solid var(--black);
  border-radius: .2rem;
  font-size: 1rem;
  &::placeholder {
    font-family: var(--font-body);
    color: var(--gray);
  }
`;

export const ButtonSearch = styled.button`
  padding: .469rem;
  background: var(--primary-color);
  color: var(--white);
  border: 1px solid var(--primary-color);
  border-radius: .2rem;
`;

export const IconButtonSearch = styled(BiSearch)`
  font-size: 1rem;
`;