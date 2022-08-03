import s from './Navigate.module.css'
import {NavLink} from "react-router-dom";
import {useEffect} from "react";


export const Navigate = ({visible, activeVisible, setVisible, activeStyle}) => {

    useEffect(() => {
        if (visible) {
            document.body.classList.add('lock')
        }
            return () => { document.body.classList.remove('lock')
        };
        },
        [visible]
    );

    const onVisible = () => {
        setVisible(!visible)
    }

    const onCheckedVisible = () => {
        setVisible(false)
    }

    return (
        <nav className={s.navigate}>
            <div
                className={s.toggle}>
                {visible && <span></span>}
                <label htmlFor="check">
                    <input
                        onChange={onVisible}
                        type="checkbox"
                        checked={visible}
                        value=''

                    />
                    <span onClick={onVisible} className={s.bar}></span>
                    <span onClick={onVisible} className={s.bar}></span>
                    <span onClick={onVisible} className={s.bar}></span>
                </label>
            </div>
            <ul
                style={visible ? activeVisible : undefined}
                className={s.listItems}>
                <li className={s.listItem}>
                    <NavLink to='/luge'
                             style={({isActive}) =>
                                 isActive ? activeStyle : undefined
                             }
                             className={s.link}><span onClick={onCheckedVisible}>Главная</span>
                    </NavLink>

                </li>
                <li className={s.listItem}>
                    <NavLink to='/documents'
                             style={({isActive}) =>
                                 isActive ? activeStyle : undefined
                             }
                             className={s.link}><span onClick={onCheckedVisible}>Документы</span>
                    </NavLink>
                </li>
                <li className={s.listItem}>
                    <NavLink to='/news'
                             style={({isActive}) =>
                                 isActive ? activeStyle : undefined
                             }
                             className={s.link}><span onClick={onCheckedVisible}>Новости</span>
                    </NavLink>
                </li>
                <li className={s.listItem}>
                    <NavLink to='/team'
                             style={({isActive}) =>
                                 isActive ? activeStyle : undefined
                             }
                             className={s.link}><span onClick={onCheckedVisible}>Команда</span>
                    </NavLink>
                </li>
                <li className={s.listItem}>
                    <NavLink to='/history'
                             style={({isActive}) =>
                                 isActive ? activeStyle : undefined
                             }
                             className={s.link}><span onClick={onCheckedVisible}>История</span>
                    </NavLink>
                </li>
                <li className={s.listItem}>
                    <NavLink to='/competition-results'
                             style={({isActive}) =>
                                 isActive ? activeStyle : undefined
                             }
                             className={s.link}><span onClick={onCheckedVisible}>Результаты соревнований</span>
                    </NavLink>
                </li>
            </ul>
        </nav>

    )
}