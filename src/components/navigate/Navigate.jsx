import s from './Navigate.module.css'
import {Link} from "react-router-dom";

export const Navigate = () => {
    return (

        <nav className={s.navigate}>
            <ul className={s.listItems}>
                <li className={s.listItem}>
                    <Link to='/'>Главная</Link>
                </li>
                <li className={s.listItem}>
                    <Link to='/documents'>Документы</Link>
                </li>
                <li className={s.listItem}>
                    <Link to='/news'>Новости</Link>
                </li>
                <li className={s.listItem}>
                    <Link to='/team'>Команда</Link>
                </li>
                <li className={s.listItem}>
                    <Link to='/history'>История</Link>
                </li>
                <li className={s.listItem}>
                    <Link to='/competition-results'>Результаты соревнования</Link>
                </li>
            </ul>
        </nav>

    )
}