import s from './Navigate.module.css'
import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";

export const Navigate = ({visible, activeVisible, setVisible, activeStyle}) => {

    const [checked, setChecked] = useState(false)

    useEffect(() => {
        if (checked) {
            document.body.classList.add('lock')
        }
            return () => { document.body.classList.remove('lock') };
        },
        [checked]
    );


    const onVisible = () => {
        setChecked(!checked)
        setVisible(!visible)
    }

    const onNotMarker = () => {
        setChecked(!checked)
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
                        checked={checked}
                        value=''

                    />
                    <span onClick={onVisible} className={`${s.bar}  ${s.top}`}></span>
                    <span onClick={onVisible} className={`${s.bar}  ${s.middle}`}></span>
                    <span onClick={onVisible} className={`${s.bar}  ${s.bottom}`}></span>
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
                             className={s.link}><span onClick={onNotMarker}>Главная</span>
                    </NavLink>

                </li>
                <li className={s.listItem}>
                    <NavLink to='/documents'
                             style={({isActive}) =>
                                 isActive ? activeStyle : undefined
                             }
                             className={s.link}><span onClick={onNotMarker}>Документы</span>
                    </NavLink>
                </li>
                <li className={s.listItem}>
                    <NavLink to='/news'
                             style={({isActive}) =>
                                 isActive ? activeStyle : undefined
                             }
                             className={s.link}><span onClick={onNotMarker}>Новости</span>
                    </NavLink>
                </li>
                <li className={s.listItem}>
                    <NavLink to='/team'
                             style={({isActive}) =>
                                 isActive ? activeStyle : undefined
                             }
                             className={s.link}><span onClick={onNotMarker}>Команда</span>
                    </NavLink>
                </li>
                <li className={s.listItem}>
                    <NavLink to='/history'
                             style={({isActive}) =>
                                 isActive ? activeStyle : undefined
                             }
                             className={s.link}><span onClick={onNotMarker}>История</span>
                    </NavLink>
                </li>
                <li className={s.listItem}>
                    <NavLink to='/competition-results'
                             style={({isActive}) =>
                                 isActive ? activeStyle : undefined
                             }
                             className={s.link}><span onClick={onNotMarker}>Результаты соревнований</span>
                    </NavLink>
                </li>
            </ul>
        </nav>

    )
}