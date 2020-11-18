import React from 'react';
import Styles from "./Content.module.scss"
import TopHeader from "../TopHeader/TopHeader"
import CardProfit from "./card-profit/CardProfit"
import CardExpenses from "./card-expenses/CardExpenses"
import { APPLE, ATLASSIAN, MORE, ARROW, BARSCIRCLE } from '../../Constants/Icons';
import CardInvoices from './card-invoices/CardInvoices';

function Content(props) {
    return (
        <div>
            <div className={Styles.mid}>
                <div className={Styles.profit}>
                    <TopHeader icon={[BARSCIRCLE]} title={"Total profit"} subtitle={"September 2020"} />
                    <div className={Styles.Deck}>
                        <CardProfit profits={22.3} />
                    </div>

                </div>
                <div>
                    <TopHeader icon={[ARROW]} title={"Expenses"} subtitle={""} />
                    <div className={Styles.Deck}>
                        <CardExpenses bg={"#F0F4FF"} icon={ATLASSIAN} label={"Software"} price={20} date={"23 Sep, 2020"} />
                        <CardExpenses bg={"#EFFCEF"} icon={MORE} label={"Management"} price={30} date={"26 Sep, 2020"} />
                        <CardExpenses bg={"#E6F5FA"} icon={APPLE} label={"Support"} price={60} date={"28 Sep, 2020"} />
                    </div>
                </div>
            </div>
            <div className={Styles.bottom}>
                <TopHeader icon={[BARSCIRCLE, ARROW]} title={"Invoices"} subtitle={"recently created"} />
                <div className={Styles.Deck}>
                    <CardInvoices color={"#FB9907"} id={"#00106"} name={"Mindtickle"} date={"2 Sep, 2020"} price={"3,500"} statet={"Viewed"} />
                    <CardInvoices color={"#0A725A"} id={"#00105"} name={"Cleancloud"} date={"1 Sep, 2020"} price={"2,000"} statet={"Sent"} />
                </div>
            </div>
        </div>

    );
}

export default Content;