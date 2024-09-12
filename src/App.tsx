import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/Header/Header";
import {Main} from "./layout/sections/Main/Main";
import {Skills} from "./layout/sections/Skills/Skills";
import {Works} from "./layout/sections/Works/Works";
import {Testimony} from "./layout/sections/Testimony/Testimony";
import {Contact} from "./layout/sections/Contacts/Contacts";
import {Slogan} from "./layout/sections/Slogan/Slogan";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
            <Contact/>
            <Slogan/>
        </div>
    );
}

export default App;

