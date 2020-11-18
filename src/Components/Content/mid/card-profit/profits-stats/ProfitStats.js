import React from 'react';
import Styles from './ProfitStats.module.scss'

export default function ProfitStats({income, expenses}){
    return (
        <div>
            <div className={Styles.container}>
                <div className={`${Styles.Point} ${Styles.incomePoint}`}></div>
                <p>{`$${income}k income`}</p>
            </div>
            <div className={Styles.container}>
                <div className={`${Styles.Point} ${Styles.expensesPoint}`}></div>
                <p>{`$${expenses}k expenses`}</p>
            </div>
        </div>
    );
}