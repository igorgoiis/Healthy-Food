import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 7px;
  box-shadow: 0 15px 20px #1d164d22;

  img {
    width: auto;
    height: 100%;
  }

  div {
    padding: 0px 32px;
  }

  div h2 {
    font-family: var(--font-title);
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2rem;
    color: var(--black);
    margin-bottom: 20px;
  }
`

export const ButtonSeeRecipe = styled(Link)`
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