import React from 'react';
import Styles from './Navbar.module.scss'
import Navsection from './navsection/Navsection';
import { RECT, TRIANGLE, PLUS } from '../../Constants/Icons'

function Navbar(props) {
    return (
        <div className={Styles.navbar}>
            <div className={Styles.points}>
                <label className={Styles.one} >.&nbsp;</label>
                <label className={Styles.two} >.&nbsp;</label>
                <label className={Styles.three} >.</label>
            </div>

            <Navsection icon={TRIANGLE} color={"#C1E9FF"} />
            <Navsection icon={RECT} color={"#D2FFD6"} />
            <Navsection icon={PLUS} color={"#4B4B4B"} />
        </div>
    );
}

export default Navbar;