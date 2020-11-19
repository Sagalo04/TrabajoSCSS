import React from 'react';
import Styles from './Navbar.module.scss'
import Navsection from './navsection/Navsection';
import { RECT, TRIANGLE, PLUS } from '../../Constants/Icons'

export default class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 1
        }
    }

    changeActive = (index) => {
        console.log(index)
        this.setState({ activeIndex: index })
    }

    checkActive = (index) => {
        let colorized = "#000000"
        if (this.state.activeIndex === index) {
            if (this.state.activeIndex === 0) {
                colorized = "#C1E9FF"
            } else if (this.state.activeIndex === 1) {
                colorized = "#D2FFD6"
            } else if (this.state.activeIndex === 2) {
                colorized = "#4B4B4B"
            } return (
                <div style={{backgroundColor : `${colorized}`}}className={Styles.active}>
                </div>
            )
        } else {
            return (
                <div style={{backgroundColor : `${colorized}`}} className={Styles.active}>
                </div>
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
                    {this.checkActive(0)}
                    <Navsection icon={TRIANGLE} changeActive={this.changeActive.bind(this, 0)} color={"#C1E9FF"} />
                </div>
                <div className={Styles.navsec}>
                    {this.checkActive(1)}
                    <Navsection icon={RECT} changeActive={this.changeActive.bind(this, 1)} color={"#D2FFD6"} />
                </div>
                <div className={Styles.navsec}>
                    {this.checkActive(2)}
                    <Navsection icon={PLUS} changeActive={this.changeActive.bind(this, 2)} color={"#4B4B4B"} />
                </div>
            </div>
        );
    }
}
