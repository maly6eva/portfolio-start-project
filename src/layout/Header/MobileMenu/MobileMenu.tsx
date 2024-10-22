import React from 'react';
import styled, {css} from "styled-components";
import {Theme} from "../../../styles/Theme";
import menu from '../../../assets/images/menu-btn.svg'
import close from '../../../assets/images/close-btn.svg'
import {Icon} from "../../../components/Icon/Icon";

export const MobileMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={true}>
                <ImgOne isOpen={true} src={menu} alt=""/>
                <ImgTwo isOpen={false} src={close} alt=""/>
                {/*<Icon width={'24px'} height={'24px'} viewBox={'0 0 24 24'} iconId={'close'} />*/}
                {/*<Icon width={'24px'} height={'24px'} viewBox={'0 0 24 24'} iconId={'menu'} />*/}
            </BurgerButton>

            <MobileMenuPopup isOpen={true}>
                <ul>
                    {props.menuItems.map((item: string, index: number) => {
                        return <ListItem key={index}>
                            <Link href="#">
                                {item}
                                <Mask>
                                    <span>{item}</span>
                                </Mask>
                                <Mask>
                                    <span>{item}</span>
                                </Mask>
                            </Link>
                        </ListItem>
                    })}
                </ul>
            </MobileMenuPopup>

        </StyledMobileMenu>
    )
}


const StyledMobileMenu = styled.nav`
    display: none;
    @media ${Theme.media.tablet} {
        display: block;
    }
`
const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    background-color: rgba(31, 31, 32, 0.9);
    display: none;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}
    
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 3;
    
          ${props => props.isOpen && css<{ isOpen: boolean }>`
                
            `}
`
const ImgOne = styled.img<{ isOpen: boolean
}>`
    position: fixed;
    top: 0;
    right: 0;
    width: 100px;
    height: 100px;
    z-index: 3;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: none;
            `}
`
const ImgTwo = styled.img<{ isOpen: boolean }>`
    position: fixed;
    top: 25px;
    right: 25px;
    width: 25px;
    height: 25px;
    z-index: 3;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: none;
                
            `}
`
const Link = styled.a`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
    font-size: 30px;
    text-align: center;
    color: transparent;
`

const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow-y: hidden;
    color: ${Theme.colors.accent};

    & + & {
        top: 50%;

        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }

`
const ListItem = styled.li`
    position: relative;

    &::before {
        content: '';
        display: inline-block;
        height: 3px;
        background-color: ${Theme.colors.font};
        color: ${Theme.colors.font};

        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 1;

        transform: scale(0)
    }

    &:hover {
        &::before {
            transform: scale(1)
        }

        ${Mask} {
            transform: skewX(12deg) translateX(5px);
            color: ${Theme.colors.font};

            ${Mask} + ${Mask} {
                transform: skewX(12deg) translateX(-5px);
            }
        }
    }
`