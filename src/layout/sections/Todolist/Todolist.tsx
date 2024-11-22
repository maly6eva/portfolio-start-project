import React, {useState} from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {TodolistSkills} from "./TodolistSkills";
import {v1} from "uuid";


export type  FilterType = 'All' | 'Active' | 'Completed'
export const Todolist = () => {
    const name1 ='CSS'

    const [tas, setTas] = useState([
        {id: v1(), isDone: true, text: 'Flexbox' },
        {id:  v1(), isDone: false, text:  'Grid' },
        {id:  v1(), isDone: true, text: 'анимации'},
        {id:  v1(), isDone: true, text: 'Webpack' },
        {id:  v1(), isDone: false, text:  'Vite' },
        {id:  v1(), isDone: false, text: 'Parcel'},
        {id:  v1(), isDone: false, text: 'Vue' },
        {id:  v1(), isDone: true, text:  'React' },
        {id:  v1(), isDone: false, text: 'Angular'}
    ])

    const  addTask = (id: string) => {
        const newTask =  {id:  v1(), isDone: false, text: id}
        const newTasks = [newTask, ...tas]
        setTas(newTasks)
    }

    function removeTask(id: string) {
        let resultTask = tas.filter((el) => {
            return el.id !== id;
        })
        setTas(resultTask)
    }


    let [filled, setFilled] = useState<FilterType>('All')

    function chanFilled(value: FilterType) {
        setFilled(value)
    }

    let tasksForTodoList = tas;
    if(filled === 'Completed') {
        tasksForTodoList = tas.filter(el => el.isDone === true)
    }
    if(filled  === 'Active') {
        tasksForTodoList = tas.filter(el => el.isDone === false)
    }

    return (
        <TodolistSection>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <TodolistSkills title={name1} tasks={tasksForTodoList} removeTask={removeTask} chanFilled={chanFilled} addTask={addTask}/>
                </FlexWrapper>
            </Container>

        </TodolistSection>
    );
};

const TodolistSection = styled.section`
`