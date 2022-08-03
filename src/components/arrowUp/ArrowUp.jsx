import {useEffect, useState} from "react";
import s from './Arrow.module.css'


export const ArrowUp = () => {

    const [arrow, setArrow] = useState(false)

    const SOME_VALUE = '250'

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })


    const handleScroll = () => {
        if (window.scrollY >= SOME_VALUE && !arrow) {
            setArrow(true)
        } else if (window.scrollY < SOME_VALUE && arrow) {
            setArrow(false)
        }
    }
    const onscrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        })
        setArrow(false)
    }

    const scroll = {
        bottom: '15px',
    };

    return (

        <div
            style={arrow ? scroll : null}
            onClick={onscrollTop} onChange={handleScroll} className={s.arrow}>
            <div className={s.right}></div>
        </div>

    )
}