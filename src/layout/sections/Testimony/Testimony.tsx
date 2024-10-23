import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/Icon/Icon";
import {Slider} from "../../../components/Slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {IconWrapper} from "../Skills/Skill";


export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper direction={'column'} align={'center'}>
                <IconWrapper>
                    <Icon iconId={'vector'}/>
                </IconWrapper>
                <Slider/>
            </FlexWrapper>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    min-height: 50vh;
    background-color: #b198dd;

    ${IconWrapper} {
        margin: 10px 0 72px;
    }
`