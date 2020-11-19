import React from 'react'
import Styles from './SideSection.module.scss'
import UserCard from './UserCard/UserCard'
import profile from '../../Images/profile.svg'
import SectionPanel from './SectionPanel/SectionPanel'
import Settings from './Settings/Settings'

export default function SideSection() {
    return (
        <div className={Styles.section}>
            <div className={Styles.subSection}>
                <UserCard src={profile} name="Julie Bell"/>
                <SectionPanel className={Styles.start}/>
            </div>
            <Settings/>
        </div>
    )
}