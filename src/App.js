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
import {useState} from "react";


function App() {

    const [visible, setVisible]= useState(false)

    const activeStyle = {
        color: "#faf9ea",
    };

    const activeVisible = {
        display: 'block',
        transform: 'translateX(0)',
        background: '#1226ff',
        'flexDirection': 'column',
    };

    return (
        <>
            <div className={s.container}>
                <Header />
                <Navigate visible = {visible}
                          setVisible= {setVisible}
                          activeStyle={activeStyle}
                          activeVisible={activeVisible}/>
                <div className={s.wrapper}>
                <Routes>
                    <Route path='/luge' element={<Main />} />
                    <Route path='/documents' element={<Docks/>} />
                    <Route path='/news' element={<News/>} />
                    <Route path='/team' element={<Team/>} />
                    <Route path='/history' element={<History/>} />
                    <Route path='/competition-results' element={<Result/>} />
                </Routes>
                </div>
                <Footer />
            </div>
        </>

    );
}

export default App;
