import Content from './Components/Content/Content';
import BlackComponent from './Components/bottomComponent/blackComponent/blackComponent'
import image from './Images/mac.svg'
import profile from './Images/profile.svg'
import SectionPanel from './Components/SectionPanel/SectionPanel'
import Settings from './Components/Settings/Settings'

function App() {
  return (
    <div className="App">
      <Content />
      <BlackComponent label={"Work Anywhere with the Invoicer Mobile Apps "}/>
      <img src={image} alt="alt" />
      <img src={profile} alt="alt" />
      <SectionPanel/>
      <Settings/>
    </div>
  );
}

export default App;
