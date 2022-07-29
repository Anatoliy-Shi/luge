import s from './Navigate.module.css'

export const Navigate = () => {
    return (
        <nav className={s.navigate}>
            <ul>
                <li>документы</li>
                <li>новости</li>
                <li>о нас</li>
            </ul>
        </nav>
    )
}