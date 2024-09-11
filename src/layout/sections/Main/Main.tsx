import React from 'react';
import photo from '../../../assets/images/photo.webp';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={'center'} justify={'space-around'}>
            <div>
                <span>Hi There</span>
                <Name>I am Ksenia Malysheva</Name>
                <MainTitle>A Web Developer.</MainTitle>
            </div>

            <Photo src={photo}/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: #fbe1a2;
`

const Photo = styled.img`
    width: 350px;
    height: 470px;
    object-fit: cover;
    `

const MainTitle = styled.h1`
    font-size: 1rem;
    `

const Name = styled.h2`
    font-size: 4rem;
    `