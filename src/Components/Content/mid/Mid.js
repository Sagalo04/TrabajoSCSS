import React from 'react';
import Styles from "./mid.module.scss"
import TopHeader from "../TopHeader/TopHeader"
import CardProfit from "./card-profit/CardProfit"
import CardExpenses from "./card-expenses/CardExpenses"
import { APPLE, ATLASSIAN, MORE, ARROW, BARSCIRCLE } from '../../../Constants/Icons';

function Mid(props) {
    return (
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
    );
}

export default Mid;