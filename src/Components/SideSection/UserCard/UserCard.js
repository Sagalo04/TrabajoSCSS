import React from 'react'
import Styles from './UserCard.module.scss'

export default function UserCard({src, name}){
    return(
        <div className={Styles.card}>
            <img src={src} alt="User"/>
            <p className={Styles.welcome}>Welcome back,</p>
            <p className={Styles.name}>{name}</p>
        </div>
    )
}