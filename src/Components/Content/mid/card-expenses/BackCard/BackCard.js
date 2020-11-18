import React from 'react';
import Styles from './BackCard.module.scss'

function BackCard({bg}) {
    return (
        <svg fill={bg} className={Styles.backcard} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 171.34 215.54">
            <path d="M157.22,0H14.13A14.12,14.12,0,0,0,0,14.13V215l17.62-4.58,9.07,4.63,12.22-2.8,4.06,2.8,11.24-2.94,10,3.29,4.5-4.4,16.94,4.4L102.15,211l5.41,4.44,11.72-3.19,9.07,3.19L139.49,211l10.29,4.37,6.67-4.51,14.89,4.64V14.13A14.12,14.12,0,0,0,157.22,0Z" />
        </svg>
    );
}

export default BackCard;