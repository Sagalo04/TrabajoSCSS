import React from 'react';
import Styles from './Navsection.module.scss'

function Navsection({icon,color}) {
    return (
        <div style={{backgroundColor: color}} className={Styles.navsection}>
            <img src={icon} alt="icon"/>
        </div>
    );
}

export default Navsection;