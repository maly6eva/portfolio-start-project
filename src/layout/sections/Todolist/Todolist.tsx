import React, {useState} from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {TodolistSkills} from "./TodolistSkills";


export type  FilterType = 'All' | 'Active' | 'Completed'
export const Todolist = () => {
    const name1 ='CSS'

    const [tas, setTas] = useState([
        {id: 1, isDone: true, text: 'Flexbox' },
        {id: 2, isDone: false, text:  'Grid' },
        {id: 3, isDone: true, text: 'анимации'},
        {id: 4, isDone: true, text: 'Webpack' },
        {id: 5, isDone: false, text:  'Vite' },
        {id: 6, isDone: false, text: 'Parcel'},
        {id: 7, isDone: false, text: 'Vue' },
        {id: 8, isDone: true, text:  'React' },
        {id: 9, isDone: false, text: 'Angular'}
    ])

    function removeTask(id: number) {
        let resultTask = tas.filter((el) => {
            return el.id !== id;
        })
        setTas(resultTask)
    }


    let [filt, setFilt] = useState<FilterType>('All')

    function chanFilt(value: FilterType) {
        setFilt(value)
    }

    let tasksForTodoList = tas;
    if(filt === 'Completed') {
        tasksForTodoList = tas.filter(el => el.isDone === true)
    }
    if(filt === 'Active') {
        tasksForTodoList = tas.filter(el => el.isDone === false)
    }

    return (
        <TodolistSection>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <TodolistSkills title={name1} tasks={tasksForTodoList} removeTask={removeTask} chanFilt={chanFilt}/>
                </FlexWrapper>
            </Container>

        </TodolistSection>
    );
};

const TodolistSection = styled.section`
`