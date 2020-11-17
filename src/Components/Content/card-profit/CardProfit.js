import React from 'react';
import Styles from './CardProfit.module.scss'
import background from '../../../Images/profit.JPG'
import ProfitStats from './profits-stats/ProfitStats'

function CardProfit({ profits }) {
    return (
        <div className={Styles.cardProfit}>
            <img src={background} alt="profits" />
            <div className={Styles.profitInfo}>
                <p className={Styles.oTitle}>{`$${profits}k`}</p>
                <ProfitStats income={54.3} expenses={32.1} />
            </div>
            
            <p className={Styles.oDate}>Mo 30</p>
        </div>
    );
}

export default CardProfit;