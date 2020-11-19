import React from "react"
import Content from './Components/Content/Content';


import Navbar from './Components/navbar/Navbar';
import SideSection from './Components/SideSection/SideSection';
import Styles from './App.module.scss'


function App() {
  return (
    <div className={Styles.app}>
      <Navbar />
      <SideSection/>
      <Content />
    </div>
  );
}

export default App;
