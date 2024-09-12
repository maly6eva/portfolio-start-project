import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/Header/Header";
import {Main} from "./layout/sections/Main/Main";
import {Skills} from "./layout/sections/Skills/Skills";
import {Works} from "./layout/sections/Works/Works";
import {Testimony} from "./layout/sections/Testimony/Testimony";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
        </div>
    );
}

export default App;

