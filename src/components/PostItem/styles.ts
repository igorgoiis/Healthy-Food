import styled from "styled-components";

export const Container = styled.div`
  margin: 0 12px;
  box-shadow: 0 15px 20px #1d164d22;;

  img {
    width: 100%;
  }

  h1 {
    font-family: var(--font-title);
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.8rem;
    color: var(--black);
    margin-bottom: 20px;
    text-align: start;

    @media (max-width: 560px) {
      font-size: 1.4rem;
      line-height: 1.8rem;
    }
  }
`;

export const Autor = styled.div`
  display: flex;

  span {
    text-align: start;
  }
`;

export const Picture = styled.div`
  width: 35px;
  height: 30px;
  border-radius: 222px;
  margin-right: 10px;
  overflow: hidden;

  img {
    height: 100%;
    object-fit: cover;
  }
`;