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
        display: 'flex',
        transform: 'translateX(0)',
    };

    const blur = {
        filter: 'blur(3px)'
    }

    return (
        <>
            <div className={s.container}
            >
                <Header visible={visible} blur={blur}  />
                <Navigate visible = {visible}
                          setVisible= {setVisible}
                          activeStyle={activeStyle}
                          activeVisible={activeVisible}/>
                <div
                    style={visible ? blur : null}
                    className={s.wrapper}>
                <Routes>
                    <Route path='/luge' element={<Main setVisible={setVisible} visible={visible} />} />
                    <Route path='/documents' element={<Docks setVisible={setVisible} visible={visible}/>} />
                    <Route path='/news' element={<News setVisible={setVisible} visible={visible}/>} />
                    <Route path='/team' element={<Team setVisible={setVisible} visible={visible}/>} />
                    <Route path='/history' element={<History setVisible={setVisible} visible={visible}/>} />
                    <Route path='/competition-results' element={<Result setVisible={setVisible} visible={visible}/>} />
                </Routes>
                </div>
                <Footer visible={visible} blur={blur} />
            </div>
        </>

    );
}

export default App;
