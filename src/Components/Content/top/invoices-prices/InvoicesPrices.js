import React from 'react';
import Styles from "./InvoicesPrices.module.scss"

function Getprogress(progress) {
    if (progress) {
        return (
            <div className={Styles.progressbar}>
                <div className={Styles.progress}>
                </div>
            </div>
        )
    }

}

function InvoicesPrices({ price, label, progress }) {
    return (
        <div>
            <div className={Styles.principal}>
                {Getprogress(progress)}
                <p className={Styles.prices}>{`$${price}`}</p>
            </div>

            <p className={Styles.subtitle}>{label}</p>
        </div>

    );
}

export default InvoicesPrices;