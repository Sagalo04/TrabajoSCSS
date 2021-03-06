import React from 'react';
import Styles from './CardExpenses.module.scss'
import BackCard from './BackCard/BackCard';
import clip from '../../../../Images/clip.svg'


function CardExpenses({ bg, icon, label, price, date }) {
    return (
        <div className={Styles.cardBody}>
            <BackCard bg={bg} className={Styles.backcard} />
            <div className={Styles.info}>
                <div>
                    <div className={Styles.top}>
                        <p className={Styles.price}>{`$${price}`}<label className={Styles.cents}>.00</label></p>
                        <img src={clip} alt="alt" />
                    </div>
                    <p>{date}</p>
                </div>
                <div className={Styles.iconcont}>
                    <img src={icon} alt="alt" />
                    <p>{label}</p>
                </div>
            </div>
        </div>
    );
}

export default CardExpenses;