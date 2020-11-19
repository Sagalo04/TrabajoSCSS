import React from 'react';
import Styles from './Navbar.module.scss'
import Navsection from './navsection/Navsection';
import { RECT, TRIANGLE, PLUS } from '../../Constants/Icons'

export class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        }
    }

    changeActive = (index) => {
        console.log(index)
        this.setState({ activeIndex: index })
    }

    checkActive = (index) => {
        let color = "";
        let nocolor = "#000000";
        if (this.state.activeIndex === index) {
            if (index === 0) {
                color = "#C1E9FF"
            } else if (index === 1) {
                color = "#D2FFD6"
            } else if (index === 2) {
                color = "#4B4B4B"
            }
            return (
                color
            )
        } else {
            return (
                nocolor
            )
        }
    }

    render() {
        return (
            <div className={Styles.navbar}>
                <div className={Styles.points}>
                    <label className={Styles.one} >.  </label>
                    <label className={Styles.two} >.  </label>
                    <label className={Styles.three} >.</label>
                </div>
                <div className={Styles.navsec}>
                    <div style={{ backgroundColor:`${this.checkActive(0)}`}} className={Styles.active}>
                    </div>
                    <Navsection icon={TRIANGLE} changeActive={this.changeActive.bind(this, 0)} color={"#C1E9FF"} />
                </div>
                <div className={Styles.navsec}>
                    <div style={{ backgroundColor:`${this.checkActive(1)}`}} className={Styles.active}>
                    </div>
                    <Navsection icon={RECT} changeActive={this.changeActive.bind(this, 1)} color={"#D2FFD6"} />
                </div>
                <div className={Styles.navsec}>
                    <div style={{ backgroundColor:`${this.checkActive(2)}`}} className={Styles.active}>
                    </div>
                    <Navsection icon={PLUS} changeActive={this.changeActive.bind(this, 2)} color={"#4B4B4B"} />
                </div>
            </div>
        );
    }
}

export default Navbar;