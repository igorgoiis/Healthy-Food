import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Container } from '../../styles/global';

interface NavMenuProps {
    click: boolean;
}

export const HeaderContainer = styled.header`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;

    background: #333;
`;

export const Content = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 32px;
    padding-bottom: 32px;

    ${Container}
`;

export const Logo = styled(Link)`
    font-family: var(--font-title);
    font-size: 2rem;
    font-weight: 700;
    line-height: 39px;
color: var(--primary-color);
`;

export const NavMenu = styled.nav<NavMenuProps>`
    display: flex;
    justify-content: center;
    align-items: center;

    ul {
        display: flex;
        column-gap: 32px;

        @media screen and (max-width: 960px) {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            row-gap: 40px;
            width: 40%;
            height: 100%;
            position: absolute;
            top: 0;
            right: ${({ click }) => (click ? 0 : '-100%')};
            transition: all ease .5s;
            background: #fff;
        }
    }

    li {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 103px;
        left: 0;
        opacity: 1;
        transition: all ease .5s;
        background: ${({ click }) => click ? 'rgba(0, 0, 0, 0.5)' : 'transparent'}
    }
`;

export const LinkMenu = styled(Link)`
    font-family: var(--font-body);
    font-size: 1rem;
    font-weight: 700;
    line-height: 20px;
    text-transform: uppercase;
    color: var(--white);

    @media screen and (max-width: 960px) {
        color: #000;
    }
`;

export const LinkMenuRegister = styled(Link)`
    background: var(--white);
    color: var(--primary-color);
    font-family: var(--font-body);
    font-size: 1rem;
    font-weight: 700;
    line-height: 20px;
    text-transform: uppercase;
    border: none;
    border-radius: 5px;
    padding: 1rem 1.5rem;

    @media screen and (max-width: 960px) {
        background: var(--primary-color);
        color: var(--white);
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px) {
        display: block;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translate(-100%, -50%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;