import React from 'react';
import Styles from './uploadInvoces.module.scss'
import blackimg from '../../../../Images/cloud.svg'


function UploadInvoices({label}) {
    return (
        <div className={Styles.cardBody}>
          
            <div className={Styles.info+" "+ Styles.dashL+" "+Styles.dashR+" "+Styles.dashT+" "+Styles.dashB}>   
            <img src={blackimg} alt="img background"/>
                   <p>{label}</p>
            </div>
        </div>
    );
}

export default UploadInvoices;