import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Bookingscreen from './screens/Bookingscreen';
import Homescreen from './screens/Homescreen';
import Loginscreen from "./screens/Loginscreen";
import Registerscreen from "./screens/Registerscreen";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Route path="/login" component={Loginscreen} />
        <Route path="/register" component={Registerscreen} />
        <Route path="/home" exact component={Homescreen} />
        <Route path="/book/:roomid/:fromdate/:todate" component={Bookingscreen}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
