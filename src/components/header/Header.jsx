import s from './Header.module.css'
import Logo from '../../asset/logo.jpg'


export const Header = () => {
    return (
        <div className={s.header}>
            <img className={s.imgContent}
                 src={Logo}
                 alt="logo"/>
            <h1>Федерация санного спорта Москвы</h1>
        </div>
    )
}