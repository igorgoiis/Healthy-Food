import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-top: 20px;
  margin-bottom: 40px;

  @media (max-width: 1020px) {
    grid-template-columns: 1fr;
  }
`;