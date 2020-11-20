import Products from './Components/Products';
import 'bootstrap/dist/css/bootstrap.min.css'
import {  Datacenter } from './api/Datacenter'
import Addnew from './Components/Addnew';


function App() {
  return (
    <div className="App">
      <Datacenter>

      <Addnew />
      <Products />
      </Datacenter>
    </div>
  );
}

export default App;
