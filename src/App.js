import Content from './Components/Content/Content';
import InvoicesPrices from './Components/Content/invoices-prices/InvoicesPrices';
import BlackComponent from './Components/bottomComponent/blackComponent/blackComponent'
import image from './Images/mac.svg'

function App() {
  return (
    <div className="App">
      <Content />
      <InvoicesPrices price={"21.3k"} label={"$12,095 overdue"} progress={true}/>
      <InvoicesPrices price={"12,095"} label={"Overdue"} progress={false}/>
      <BlackComponent label={"Work Anywhere with the Invoicer Mobile Apps "}/>
      <img src={image} alt="alt" />
    </div>
  );
}

export default App;
