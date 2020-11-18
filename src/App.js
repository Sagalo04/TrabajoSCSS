import Content from './Components/Content/Content';
import BlackComponent from './Components/bottomComponent/blackComponent/blackComponent'
import image from './Images/mac.svg'
import profile from './Images/profile.svg'

function App() {
  return (
    <div className="App">
      <Content />
      <BlackComponent label={"Work Anywhere with the Invoicer Mobile Apps "}/>
      <img src={image} alt="alt" />
      <img src={profile} alt="alt" />
    </div>
  );
}

export default App;
