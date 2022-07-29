import s from './App.module.css';
import {Header} from "./components/header/Header";
import {Content} from "./components/content/Content";
import {Navigate} from "./components/navigate/Navigate";
import {Footer} from "./components/footer/Footer";

function App() {
    return (
        <>
            <div className={s.container}>
                <Header/>
                <Navigate/>
                <div className={s.content}>
                    <Content/>
                </div>
                <Footer/>
            </div>
        </>

    );
}

export default App;
