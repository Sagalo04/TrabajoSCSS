import React from 'react';
import Styles from "./bottom.module.scss"
import TopHeader from "../TopHeader/TopHeader"
import { ARROW, BARSCIRCLE } from '../../../Constants/Icons';
import CardInvoices from './card-invoices/CardInvoices';
import InvoicesUpload from '../../../Components/bottomComponent/uploadInvoces/uploadInvoces'

function Bottom(props) {
    return (
        <div>
            <div className={Styles.bottom}>
                <TopHeader icon={[BARSCIRCLE, ARROW]} title={"Invoices"} subtitle={"recently created"} />
                <div className={Styles.Deck}>
                    <InvoicesUpload label={"Upload Invoice"}/>
                    <CardInvoices color={"#FB9907"} id={"#00106"} name={"Mindtickle"} date={"2 Sep, 2020"} price={"3,500"} statet={"Viewed"} />
                    <CardInvoices color={"#0A725A"} id={"#00105"} name={"Cleancloud"} date={"1 Sep, 2020"} price={"2,000"} statet={"Sent"} />
                </div>
            </div>
        </div>

    );
}

export default Bottom;