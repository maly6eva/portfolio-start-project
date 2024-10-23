import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./Skill";
import {Container} from "../../../components/Container";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                    <Skill iconId={'html'} title={'HTMl'}
                           description={'HTML - это язык гипертекстовой разметки текста.'}/>
                    <Skill iconId={'css'} title={'CSS'}
                           description={'CSS — формальный язык декодирования и описания внешнего вида документа, написанного с использованием языка разметки.'}/>
                    <Skill iconId={'react'} title={'REACT'}
                           description={'React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.'}/>
                    <Skill iconId={'ts'} title={'TypeScript'}
                           description={'TypeScript добавляет дополнительный синтаксис в JavaScript для поддержки более тесной интеграции с вашим редактором'}/>
                    <Skill iconId={'styledComponents'} title={'STYLED COMPONENTS'}
                           description={'Styled Components — одно из популярных решений написания кода методом CSS in JS. Гибкое, простое и, главное, идеально вписывается в архитектуру React приложения.'}/>
                    <Skill iconId={'web'} title={'WEB DESIGN'}
                           description={'Веб-дизайн — отрасль веб-разработки и разновидность дизайна, в задачи которой входит проектирование пользовательских веб-интерфейсов для сайтов или веб-приложений'}/>
                </FlexWrapper>
            </Container>

        </StyledSkills>
    );
};

const StyledSkills = styled.section`

`