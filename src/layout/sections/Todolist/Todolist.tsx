import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {TodolistSkills} from "./TodolistSkills";

export const Todolist = () => {
    const name1 ='CSS '
    const name2 = 'Фреймворки и библиотеки для создания UI'
    const name3 ='инструменты сборки проектов'
    const task1 = [
        {id: 1, isDone: true, text: 'Flexbox' },
        {id: 2, isDone: true, text:  'Grid' },
        {id: 3, isDone: true, text: 'анимации'}
    ]
    const task2 = [
        {id: 1, isDone: false, text: 'Vue' },
        {id: 2, isDone: true, text:  'React' },
        {id: 3, isDone: false, text: 'Angular'}
    ]
    const task3 = [
        {id: 1, isDone: true, text: 'Webpack' },
        {id: 2, isDone: false, text:  'Vite' },
        {id: 3, isDone: false, text: 'Parcel'}
    ]
    return (
        <TodolistSection>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <TodolistSkills title={name1} tasks={task1}/>
                    <TodolistSkills title={name2} tasks={task2}/>
                    <TodolistSkills title={name3} tasks={task3}/>
                </FlexWrapper>

            </Container>

        </TodolistSection>
    );
};

const TodolistSection = styled.section`
`