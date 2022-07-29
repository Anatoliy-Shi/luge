import s from './App.module.css';
import {Header} from "./components/header/Header";
import {Content} from "./components/content/Content";
import {Navigate} from "./components/navigate/Navigate";

function App() {
    return (
        <>
            <div className={s.container}>
            <Header/>
                <div className={s.content}>
            <Navigate/>
            <Content/>
                </div>
            </div>
        </>

    );
}

export default App;
