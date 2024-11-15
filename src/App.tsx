import './App.css';
import {Header} from "./layout/Header/Header";
import {Main} from "./layout/sections/Main/Main";
import {Skills} from "./layout/sections/Skills/Skills";
import {Works} from "./layout/sections/Works/Works";
import {Testimony} from "./layout/sections/Testimony/Testimony";
import {Contact} from "./layout/sections/Contacts/Contacts";
import {Slogan} from "./layout/sections/Slogan/Slogan";
import {Footer} from "./layout/Footer/Footer";
import {Todolist} from "./layout/sections/Todolist/Todolist";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Todolist/>
            <Testimony/>
            <Contact/>
            <Slogan/>
            <Footer/>
        </div>
    );
}

export default App;

