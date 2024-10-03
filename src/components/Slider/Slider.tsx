import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";
import {Theme} from "../../styles/Theme";
import  "./../../styles/slider.css"



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
        text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} />,
    <Slide userName={'ValeryMalyshev'}
        text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} />,
    <Slide userName={'DmitryMalyshev'}
        text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} />,
    <Slide userName={'KseniaMalysheva'}
           text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} />,
    <Slide userName={'ValeryMalyshev'}
           text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} />,
    <Slide userName={'DmitryMalyshev'}
           text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} />

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




// import React from 'react';
// import styled from "styled-components";
// import {FlexWrapper} from "../FlexWrapper";
// import {Theme} from "../../styles/Theme";
//
// export const Slider = () => {
//     return (
//         <StyledSlider>
//             <FlexWrapper>
//                 <Slide>
//                     <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
//                     <Name>@KseniaMaly6eva</Name>
//                 </Slide>
//             </FlexWrapper>
//             <Pagination>
//                 <span> </span>
//                 <span className={'active'}> </span>
//                 <span> </span>
//             </Pagination>
//         </StyledSlider>
//     );
// };
//
// const StyledSlider = styled.div`
//     max-width: 500px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// `
//
// const Slide = styled.div`
//     text-align: center;
//
// `
//
// const Text = styled.p`
// `
//
// const Name = styled.span`
//     font-family: "Josefin Sans", sans-serif;
//     font-size: 16px;
//     font-weight: 600;
//     letter-spacing: 1px;
//     text-transform: uppercase;
//     margin: 22px 0 42px;
//     display: inline-block;
// `
//
// const Pagination = styled.div`
//     span {
//         display: inline-block;
//         width: 7px;
//         height: 7px;
//
//         background-color: rgba(255, 255, 255, 0.5);
//         border-radius: 20px;
//
//         & + span {
//             margin-left: 5px;
//         }
//
//         &.active {
//             background-color: ${Theme.colors.accent};
//             width: 20px;
//         }
//     }
// `