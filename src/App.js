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

    const [visible, setVisible] = useState(false)
    const [checked, setChecked] = useState(false)


    const activeStyle = {
        color: "#faf9ea",
    };

    const activeVisible = {
        display: 'flex',


    };

    const blur = {
        filter: 'blur(3px)'
    }

    return (
        <>
            <div className={s.container}
            >
                <Header visible={visible} blur={blur}/>
                <Navigate visible={visible}
                          setVisible={setVisible}
                          checked={checked}
                          setChecked={setChecked}
                          activeStyle={activeStyle}
                          activeVisible={activeVisible}/>
                <div
                    style={visible ? blur : null}
                    className={s.wrapper}>
                    <Routes>
                        <Route path='/luge' element={<Main setChecked={setChecked} setVisible={setVisible}/>}/>
                        <Route path='/documents' element={<Docks setChecked={setChecked} setVisible={setVisible}/>}/>
                        <Route path='/news' element={<News setChecked={setChecked} setVisible={setVisible}/>}/>
                        <Route path='/team' element={<Team setChecked={setChecked} setVisible={setVisible}/>}/>
                        <Route path='/history' element={<History setChecked={setChecked} setVisible={setVisible}/>}/>
                        <Route path='/competition-results' element={<Result setChecked={setChecked} setVisible={setVisible}/>}/>
                    </Routes>
                </div>
                <Footer visible={visible} blur={blur}/>
            </div>
        </>

    );
}

export default App;
