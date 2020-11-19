import React from 'react'
import Styles from './SectionLink.module.scss'

export default function SectionLink({changeActive, data: {icon, label}}){
    return(
        <div className={Styles.oSection} onClick={changeActive}>
            <img className={Styles.oIcon} src={icon} alt="icon"/>
            <p className={Styles.oLabel}>{label}</p>
        </div>
    );
}