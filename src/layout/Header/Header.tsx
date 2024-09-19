import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/Logo/Logo";

import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./HeaderMenu/HeaderMenu";
import {Theme} from "../../styles/Theme";



const items = ['Home', 'Skills', 'Works','Testimony','Contact']

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    <HeaderMenu menuItems={items}/>
                </FlexWrapper>

            </Container>

        </StyledHeader>
    );
};


const StyledHeader = styled.header`
    background: rgba(220, 20, 60, 0.3);
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;

`