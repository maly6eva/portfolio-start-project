import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import styled from "styled-components";
import {FilterType} from "./Todolist";

type TodolistSkillsProps = {
    id: string,
    isDone: boolean,
    text: string,
}

type TodoListProps = {
    title?: string;
    tasks: TodolistSkillsProps[]
    removeTask: (id: string) => void;
    chanFilled: (value: FilterType) => void;
    addTask: (id: string) => void
}

export const TodolistSkills = ({title, tasks, removeTask, chanFilled, addTask}: TodoListProps) => {
const [taskTitle, setTaskTitle] = useState('')
    const addTaskHandler = () => {
        addTask(taskTitle)
        setTaskTitle('')
    }

    const onChangeTasks = (e: ChangeEvent<HTMLInputElement>) => {
            setTaskTitle(e.currentTarget.value)
    }
     const onKeyUpTaskTitle = (e: KeyboardEvent<HTMLInputElement>) => {
         if (e.key === 'Enter') {
             addTask(taskTitle)
             setTaskTitle('')
         }}
    const task = tasks.map((el) => {
        return (
            <li key={el.id}>
                <input type="checkbox" checked={el.isDone}/> <span>{el.text}</span>
                <ButtonClik onClick={() => {removeTask(el.id)}}>+</ButtonClik>
            </li>
        )
    })
    return (

        <TodoSkillslist>
            <h3>{title}</h3>
                <div>
                    <input value={taskTitle}
                           onChange={onChangeTasks}
                    onKeyUp={onKeyUpTaskTitle}/>
                    <ButtonClik onClick={addTaskHandler}>+</ButtonClik>
                </div>
                <ul>
                    {task}
                </ul>
                <ButtonDiv>
                    <button onClick={() => {chanFilled('All')}}>All</button>
                    <button onClick={() => {chanFilled('Active')}}>Active</button>
                    <button onClick={() => {chanFilled('Completed')}}>Completed</button>
                </ButtonDiv>
            </TodoSkillslist>
    );
};
const TodoSkillslist = styled.div`
    border: 5px solid #7365cb;
    padding: 30px 20px;
    background-color: #5a0b0b;
    border-radius: 6px;
    
    h3 {
        padding: 10px;
        font-size: 25px;
        color: #c5bcbc;
    }

    ul {
        padding: 0 20px 0 20px;
    }
`
const ButtonClik = styled.button`
    background-color:  #7365cb;
    margin: 8px auto 8px;

    padding: 6px 10px 6px 10px;
    border-radius: 6px;
`
const ButtonDiv = styled.div`
    background-color: #5a0b0b;

    button {
        background-color:  #7365cb;
        margin: 8px auto 8px;
        padding: 8px 15px 8px 15px;
        border-radius: 6px;
    }
`
