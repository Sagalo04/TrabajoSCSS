import CardExpenses from './Components/card-expenses/CardExpenses'
import CardProfit from './Components/card-profit/CardProfit'
import { APPLE,ATLASSIAN,MORE } from './Constants/Icons';


function App() {
  return (
    <div className="App">
      <CardProfit profits={22.3}/>
      <CardExpenses bg={"#F0F4FF"} icon={ATLASSIAN} label={"Software"} price={20} date={"23 Sep, 2020"}/>
      <CardExpenses bg={"#EFFCEF"} icon={MORE} label={"Management"} price={30} date={"26 Sep, 2020"}/>
      <CardExpenses bg={"#E6F5FA"} icon={APPLE} label={"Support"} price={60} date={"28 Sep, 2020"}/>
    </div>
  );
}

export default App;
