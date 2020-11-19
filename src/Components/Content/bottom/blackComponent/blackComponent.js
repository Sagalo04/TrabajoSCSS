import React from 'react';
import Styles from './blackComponen.module.scss'
import blackimg from '../../../../Images/blackimg.svg'


function BlackComponent({label}) {
    return (
        <div className={Styles.cardBody}>
           <img src={blackimg} alt="img background"/>
            <div className={Styles.info}>
                   <label>.&nbsp; .&nbsp; .</label>
                   <p>{label}</p>
            </div>
        </div>
    );
}

export default BlackComponent;