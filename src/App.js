import Content from './Components/Content/Content';
import image from './Images/mac.svg'

function App() {
  return (
    <div className="App">
      <Content />
      <img src={image} alt="alt" />
    </div>
  );
}

export default App;
