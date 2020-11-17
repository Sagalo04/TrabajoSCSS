import React from 'react';
import Styles from './CardInvoices.module.scss'

function CardInvoices(props) {
    return (
        <div className={Styles.container}>
            <div className={Styles.information}>
                <p className={Styles.graytext}>#00105</p>
                <p className={Styles.title}>Cleancloud</p>
                <p className={Styles.graytext}>1 Sep 2020</p>
            </div>
            <hr/>
            <div className={Styles.cost}>
                <p>Sent</p>
                <p className={Styles.title}>$2,000</p>
            </div>
        </div>
    );
}

export default CardInvoices;