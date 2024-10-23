import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/Icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Theme} from "../../styles/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={'column'} align={'center'}>
                <Name>Ksenia</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'instagram'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'telegram'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'vk'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'linkedin'}/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright>© 2024 Ksenia Malysheva, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${Theme.colors.primaryBg};
    padding: 40px 0;
`

const Name = styled.span`
    font-family: "Josefin Sans", sans-serif;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 3px;
    color: ${Theme.colors.font};
`

const SocialList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 30px 0;
`

const SocialItem = styled.li`

`
const SocialLink = styled.a`
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${Theme.colors.accent};
    
    &:hover {
        color: ${Theme.colors.primaryBg};
        transform: translateY(-4px);
    }
`

const Copyright = styled.small`
    color: rgba(255, 255, 255, 0.50);
    text-align: center;
    font-size: 12px;
    font-weight: 400;
`
