import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";
import "./../../styles/slider.css"


type SliderPropsType = {
    text: string,
    userName: string,
}

const Slide = (props: SliderPropsType) => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slid>
                    <Text>{props.text}</Text>
                    <Name>@{props.userName}</Name>
                </Slid>
            </FlexWrapper>
        </StyledSlider>
    )
}

const items = [
    <Slide userName={'KseniaMalysheva'}
           text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>,
    <Slide userName={'ValeryMalyshev'}
           text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>,
    <Slide userName={'DmitryMalyshev'}
           text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>,
    <Slide userName={'KseniaMalysheva'}
           text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>,
    <Slide userName={'ValeryMalyshev'}
           text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>,
    <Slide userName={'DmitryMalyshev'}
           text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
];

export const Slider = () => (
    <StyledSlider>
        <AliceCarousel
            mouseTracking
            items={items}
        />
    </StyledSlider>
);

const StyledSlider = styled.div`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Slid = styled.div`
    text-align: center;
    padding: 0 15px;
`
const Text = styled.p`
    
`
const Name = styled.span`
    font-family: "Josefin Sans", sans-serif;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 22px 0 42px;
    display: inline-block;
`