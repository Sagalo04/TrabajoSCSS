import React from "react"
import Content from './Components/Content/Content';
import BlackComponent from './Components/bottomComponent/blackComponent/blackComponent'

import image from './Images/mac.svg'
import profile from './Images/profile.svg'
import SectionPanel from './Components/SectionPanel/SectionPanel'
import Navbar from './Components/navbar/Navbar';
import Styles from './App.module.scss'
import Settings from './Components/Settings/Settings'
import UserCard from './Components/UserCard/UserCard'

function App() {
  return (
    <div className={Styles.xd}> 
    <Navbar />
      <div >
        <Content />
        <BlackComponent label={"Work Anywhere with the Invoicer Mobile Apps "} />
        
        <SectionPanel />
        <Settings/>
        <UserCard src={profile} name="Julie Bell"/>
      </div>
      
    </div>
  );
}

export default App;
