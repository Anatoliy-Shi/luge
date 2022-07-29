import s from './Navigate.module.css'

export const Navigate = () => {
    return (
        <nav className={s.navigate}>
            <ul className={s.listItems}>
                <li className={s.listItem}>документы</li>
                <li className={s.listItem}>новости</li>
            <li className={s.listItem}>о нас</li>
            </ul>
        </nav>
    )
}