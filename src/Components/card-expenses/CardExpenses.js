import React from 'react';
import Styles from './CardExpenses.module.scss'
import BackCard from './BackCard/BackCard';
import { APPLE } from '../../Constants/Icons';


function CardExpenses({ bg,icon,label,price,date }) {
    return (
        <div className={Styles.cardBody}>
            <BackCard bg={bg} className={Styles.backcard} />
            <div className={Styles.info}>
                <div className={Styles.top}>
                    <p className={Styles.price}>{`$${price}`}<label className={Styles.cents}>.00</label></p>
                    <img src={APPLE} alt="alt"/>
                </div>
                <p>{date}</p>
                <div className={Styles.iconcont}>
                    <img src={icon} alt="alt"/>
                    <p>{label}</p>
                </div>
            </div>
        </div>
    );
}

export default CardExpenses;