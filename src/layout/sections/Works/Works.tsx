import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./TabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./Work/Work";
import socialImg from "../../../assets/images/img1.png";
import timerImg from "../../../assets/images/img2.png";
import {Container} from "../../../components/Container";

const worksItems = ['All', 'Landing page', 'React', 'SPA']

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItems}/>
                <FlexWrapper justify={'space-between'} align={'flex-start'}>
                    <Work
                        src={socialImg}
                        title={'Social Network'}
                        text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                    <Work
                        src={socialImg}
                        title={'Timer'}
                        text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit ut labore et dolore magna aliqua Ut enim.'}/>
                </FlexWrapper>
            </Container>

        </StyledWorks>
    );
};

const StyledWorks = styled.section`
   
`