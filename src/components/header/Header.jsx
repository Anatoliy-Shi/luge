import s from './Header.module.css'
import Logo from '../../asset/logo.jpg'


export const Header = ({visible, blur}) => {
    return (
        <div
            style={visible ? blur : null}
            className={s.header}>
            <img className={s.imgContent}
                 src={Logo}
                 alt="logo"/>
            <h1 className={s.title}>Федерация санного спорта Москвы</h1>
        </div>
    )
}