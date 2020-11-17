import CardInvoices from './Components/card-invoices/CardInvoices';
import Content from './Components/Content/Content';
import TopHeader from './Components/TopHeader/TopHeader';
import { ARROW, BARSCIRCLE } from './Constants/Icons';
import image from './Images/mac.svg'

function App() {
  return (
    <div className="App">
      <Content />
      <TopHeader icon={[BARSCIRCLE, ARROW]} title={"Invoices"} subtitle={"recently created"} />
      <CardInvoices />
      <img src={image} alt="alt" />
    </div>
  );
}

export default App;
