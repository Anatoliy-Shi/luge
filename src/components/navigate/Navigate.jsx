import s from './Navigate.module.css'
import {NavLink} from "react-router-dom";

export const Navigate = () => {
    let activeStyle = {
        color: "#faf9ea",
    };

    return (

        <nav className={s.navigate}>
            <ul className={s.listItems}>
                <li className={s.listItem}>
                    <NavLink to='/'
                             style={({ isActive }) =>
                                 isActive ? activeStyle : undefined
                    }
                                 className={s.link}>Главная</NavLink>

                </li>
                <li className={s.listItem}>
                    <NavLink to='/documents'
                             style={({ isActive }) =>
                                 isActive ? activeStyle : undefined
                             }
                             className={s.link}>Документы</NavLink>
                </li>
                <li className={s.listItem}>
                    <NavLink to='/news'
                             style={({ isActive }) =>
                                 isActive ? activeStyle : undefined
                             }
                             className={s.link}>Новости</NavLink>
                </li>
                <li className={s.listItem}>
                    <NavLink to='/team'
                             style={({ isActive }) =>
                                 isActive ? activeStyle : undefined
                             }
                             className={s.link}>Команда</NavLink>
                </li>
                <li className={s.listItem}>
                    <NavLink to='/history'
                             style={({ isActive }) =>
                                 isActive ? activeStyle : undefined
                             }
                             className={s.link}>История</NavLink>
                </li>
                <li className={s.listItem}>
                    <NavLink to='/competition-results'
                             style={({ isActive }) =>
                                 isActive ? activeStyle : undefined
                             }
                             className={s.link}>Результаты соревнований</NavLink>
                </li>
            </ul>
        </nav>

    )
}