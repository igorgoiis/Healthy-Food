import styled from 'styled-components';
import { Container } from '../../styles/global';

export const Content = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  h1 {
    font-family: var(--font-title);
    color: var(--black);
  }

  span {
    width: 60%;
    text-align: center;
    font-family: var(--font-body);
    color: var(--gray);
  }

  ${Container}
`;