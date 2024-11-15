import React from 'react';
import styled from "styled-components";

type TodolistSkillsProps = {
    id: number,
    isDone: boolean,
    text: string,
}

type TodoListProps = {
    title?: string;
    tasks: TodolistSkillsProps[]
}

export const TodolistSkills = ({title, tasks}: TodoListProps) => {

    const task = tasks.map((el) => {
        return (
            <li key={el.id}>
                <input type="checkbox" checked={el.isDone}/> <span>{el.text}</span>
            </li>
        )
    })
    return (

        <TodoSkillslist>
            <h3>{title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {task}

                </ul>
                <ButtonDiv>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
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

const ButtonDiv = styled.div`
    background-color: #5a0b0b;

    button {
        background-color:  #7365cb;
        margin: 8px auto 8px;
        list-style: none;
        padding: 8px 15px 8px 15px;
        border-radius: 6px;
    }
`
