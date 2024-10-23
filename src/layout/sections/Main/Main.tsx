import React from 'react';
import photo from '../../../assets/images/photo.webp';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {Theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";


const items = ['Home', 'Skills', 'Works', 'Testimony', 'Contact']


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'center'} justify={'space-around'} wrap={'wrap'}>
                    <ContentText>
                        <SmallText>Hi There</SmallText>
                        <Name>I am <span>Ksenia Malysheva</span></Name>
                        <MainTitle>A Web Developer.</MainTitle>
                    </ContentText>
                    <PhotoWrapper>
                        <Photo src={photo} alt=''/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: ${Theme.colors.secondaryBg};
    display: flex;
`

const ContentText = styled.div`
    position: relative;
    padding: 16px;

    @media ${Theme.media.wrap} {
        padding-top: 100px;
    }
`

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;

    &::before {
        content: '';
        width: 350px;
        height: 480px;
        border: 5px solid ${Theme.colors.accent};
        position: absolute;
        top: -24px;
        left: 24px;
        z-index: -1;

        @media ${Theme.media.mobile} {
            top: -24px;
            left: 24px;
            width: 314px;
            height: 414px;
            margin-top: -65px;
        }
    }
`

const Photo = styled.img`
    width: 350px;
    height: 470px;
    object-fit: cover;

    @media ${Theme.media.mobile} {
        width: 310px;
        height: 400px;
        margin-top: -65px;
    }
`

const MainTitle = styled.h1`
    ${font({weight: 400, Fmax: 27, Fmin: 20, color: Theme.colors.font})};
`

const Name = styled.h2`
    ${font({family: 'Josefin Sans, sans-serif', weight: 700, Fmax: 50, Fmin: 36, color: Theme.colors.font})}
    letter-spacing: 0.05em;
    margin: 10px 0;

    @media ${Theme.media.mobile} {
        margin: 15px 0 22px;
    }

    span {
        position: relative;
        z-index: 0;
        white-space: nowrap;

        &::before {
            content: '';
            display: inline-block;
            width: 100%;
            height: 20px;
            background-color: ${Theme.colors.accent};
            position: absolute;
            bottom: 0;
            z-index: -1;
        }
    }
`

const SmallText = styled.span`
    font-size: 14px;
    font-weight: 400;
    color: ${Theme.colors.font};
`