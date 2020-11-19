import React from 'react';
import Styles from './Navsection.module.scss'

function Navsection({ changeActive,icon, color }) {
    return (

            <div style={{ backgroundColor: color }} className={Styles.navsection} onClick={changeActive}>
                <img src={icon} alt="icon" />
            </div>

    );
}

export default Navsection;