import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";

export const TabMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMenu>

                <ul>
                    {props.menuItems.map((item: string, index: number) => {
                        return <ListItem key={index}>
                            <Link href="#">{item}</Link>
                        </ListItem>

                    })}
                </ul>

        </StyledMenu>
    )
}


const StyledMenu = styled.nav`
    margin-bottom: 40px;
    ul {
        display: flex;
        gap: 20px;
        justify-content: center;
    }
`

const ListItem = styled.li`
   
`


