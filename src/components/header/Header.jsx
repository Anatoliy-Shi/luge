import s from './Header.module.css'

export const Header = () => {
    return (
        <div className={s.header}>
            <img className={s.imgContent}
                 src="https://w7.pngwing.com/pngs/98/147/png-transparent-luge-sled-slide-olympics-sports-ice-winter-logo-pictogram-speed.png"
                 alt="logo"/>
            <h1>Федерация санного спорта</h1>
        </div>
    )
}