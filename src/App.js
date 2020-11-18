import Content from './Components/Content/Content';
import BlackComponent from './Components/bottomComponent/blackComponent/blackComponent'
import image from './Images/mac.svg'

function App() {
  return (
    <div className="App">
      <Content />
      <BlackComponent label={"Work Anywhere with the Invoicer Mobile Apps "}/>
      <img src={image} alt="alt" />
    </div>
  );
}

export default App;
