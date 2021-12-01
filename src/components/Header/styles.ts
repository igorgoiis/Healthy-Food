import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: green;
`;

export const Content = styled.div`
    max-width: 1088px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 32px 0;
`;

export const Logo = styled.h1`
    font-family: var(--font-title);
    font-size: 2rem;
    font-weight: 700;
    line-height: 39px;
    color: var(--primary-color);
`;

export const Menu = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;

    ul {
        display: flex;
        column-gap: 32px;
    }

    li {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: var(--font-body);
        font-size: 1rem;
        font-weight: 700;
        line-height: 20px;
        text-transform: uppercase;
        color: var(--white);
    }

    li button {
        background: var(--white);
        color: var(--primary-color);
        border: none;
        border-radius: 5px;;
        padding: 1rem 1.5rem;
    }
`;

