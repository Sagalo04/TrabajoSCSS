import React from 'react';
import Styles from './TopHeader.module.scss'

function GetIcons(icons) {
    if (icons.length === 1) {
        return <div className={Styles.iconscontainerA}>
            <img className={Styles.icon} src={icons[0]} alt="alt" />
        </div>
    } else {
        return <div className={Styles.iconscontainer}> 
            <img className={Styles.icon} src={icons[0]} alt="alt" />
            <img className={Styles.icon} src={icons[1]} alt="alt" />
        </div>
    }

}

function TopHeader({ icon,title,subtitle }) {
    return (
        <div className={Styles.container}>
            <div>
                <p className={Styles.Title}>{title} <label className={Styles.SubTitle}>{subtitle}</label></p>
            </div>
            {GetIcons(icon)}
        </div>
    );
}

export default TopHeader;