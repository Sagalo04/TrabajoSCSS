import React from 'react'
import Styles from './Settings.module.scss'
import settingsImg from '../../Images/settings.svg'
import arrow from '../../Images/arrow3.svg'

export default function Settigns(props){
    return(
        <div className={Styles.principal}>
            <img src={settingsImg} alt="settings" className={Styles.image}/>
            <p>Settings</p>
            <img src={arrow} alt="arrow" className={Styles.arrow}/>
        </div>
    )
}