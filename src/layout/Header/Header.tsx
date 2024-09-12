import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/Logo/Logo";
import {Menu} from "../../components/Menu/Menu";


const items = ['Home', 'Skills', 'Works','Testimony','Contact']

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={items}/>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
    background-color: aquamarine;
    display: flex;
    justify-content: space-between;
`