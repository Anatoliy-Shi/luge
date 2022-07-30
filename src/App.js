import s from './App.module.css';
import {Header} from "./components/header/Header";
import {Main} from "./components/content/main/Main";
import {Navigate} from "./components/navigate/Navigate";
import {Footer} from "./components/footer/Footer";
import {Routes, Route} from "react-router";
import {Docks} from "./components/content/documents/Docks";
import {News} from "./components/content/news/News";
import {Team} from "./components/content/team/Team";
import {History} from "./components/content/history/History";
import {Result} from "./components/content/competition-results/Result";

function App() {
    return (
        <>
            <div className={s.container}>
                <Header/>
                <Navigate/>
                <Routes>
                    <Route path='/' element={<Main/>} />
                    <Route path='/documents' element={<Docks/>} />
                    <Route path='/news' element={<News/>} />
                    <Route path='/team' element={<Team/>} />
                    <Route path='/history' element={<History/>} />
                    <Route path='/competition-results' element={<Result/>} />
                </Routes>
                <Footer/>
            </div>
        </>

    );
}

export default App;
