import React from 'react';
import Styles from './top.module.scss'
import InvoicesPrices from './invoices-prices/InvoicesPrices';
import {SEARCH} from '../../../Constants/Icons'


function Top(props) {
    return (
        <div className={Styles.top}>
            <div>
                <p className={Styles.title}>Invoices</p>
                <div className={Styles.Deck}>
                    <InvoicesPrices price={"12,095"} label={"Overdue"} progress={false} />
                    <InvoicesPrices price={"33,363"} label={"Total outstanding"} progress={false} />
                    <InvoicesPrices price={"4,500"} label={"In draft"} progress={false} />
                </div>
            </div>
            <div className={Styles.progress}>
                <p className={Styles.title}>Outstanding revenue</p>
                <div className={Styles.Deck}>
                    <InvoicesPrices price={"21.3k"} label={"$12,095 overdue"} progress={true} />
                </div>
            </div>
            <img src={SEARCH} alt="icon-search"/>
        </div>
    );
}

export default Top;