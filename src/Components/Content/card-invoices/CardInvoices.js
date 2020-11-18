import React from 'react';
import Styles from './CardInvoices.module.scss'

function CardInvoices({id,name,date,price,statet,color}) {
    return (
        <div className={Styles.container}>
            <div style={{borderLeft: `1px solid ${color}`}} className={Styles.information}>
                <p className={Styles.graytext}>{id}</p>
                <p className={Styles.boldtext}>{name}</p>
                <p className={Styles.graytext}>{date}</p>
            </div>
            <hr/>
            <div className={Styles.cost}>
                <p className={Styles.text}>{statet}</p>
                <p className={Styles.boldtext}>{`$${price}`}</p>
            </div>
        </div>
    );
}

export default CardInvoices;