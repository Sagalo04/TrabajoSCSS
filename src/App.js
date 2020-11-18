import Content from './Components/Content/Content';
import InvoicesPrices from './Components/Content/invoices-prices/InvoicesPrices';
import image from './Images/mac.svg'

function App() {
  return (
    <div className="App">
      <Content />
      <InvoicesPrices price={"21.3k"} label={"$12,095 overdue"} progress={true}/>
      <InvoicesPrices price={"12,095"} label={"Overdue"} progress={false}/>
      <img src={image} alt="alt" />
    </div>
  );
}

export default App;
