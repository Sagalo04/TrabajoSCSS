import React from "react"
import Content from './Components/Content/Content';


import Navbar from './Components/Navbar/Navbar';
import SideSection from './Components/SideSection/SideSection';
import Styles from './App.module.scss'


function App() {
  return (
    <div className={Styles.xd}>
      <Navbar />
      <SideSection/>
      <Content />
    </div>
  );
}

export default App;
