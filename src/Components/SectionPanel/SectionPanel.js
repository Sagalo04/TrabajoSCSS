import React from 'react'
import SectionLink from './SectionLink/SectionLink'
import {ROCKET, CLIENT, INVOICES, ESTIMATES, TEAM} from '../../Constants/Icons'
import Styles from './SectionPanel.module.scss'
import arrow from "../../Images/arrow2.svg"

export default class SectionPanel extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            activeIndex: 0
        }
    }

    changeActive = (index)=>{
        this.setState({activeIndex: index})
    }

    checkActive = (index)=>{
        if(this.state.activeIndex === index){
            return(
                <div className={Styles.arrow}>
                    <img src={arrow} alt="hola" />
                </div>
            )
        }else{
            return(<div></div>)
        }
    }

    render(){
        return(
            <div className={Styles.principal}>
                {this.checkActive(0)}
                <SectionLink data={ROCKET} changeActive={this.changeActive.bind(this, 0)}/>
                {this.checkActive(1)}
                <SectionLink data={CLIENT} changeActive={this.changeActive.bind(this, 1)}/>
                {this.checkActive(2)}
                <SectionLink data={INVOICES} changeActive={this.changeActive.bind(this, 2)}/>
                {this.checkActive(3)}
                <SectionLink data={ESTIMATES} changeActive={this.changeActive.bind(this, 3)}/>
                {this.checkActive(4)}
                <SectionLink data={TEAM} changeActive={this.changeActive.bind(this, 4)}/>
            </div>
        )
    }
}
