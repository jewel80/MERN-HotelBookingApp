import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import 'antd/dist/antd.css';
import Adminscreen from "./screens/Adminscreen";
import Bookingscreen from './screens/Bookingscreen';
import Homescreen from './screens/Homescreen';
import Loginscreen from "./screens/Loginscreen";
import Profilescreen from "./screens/Profilescreen";
import Registerscreen from "./screens/Registerscreen";
import Landingscreen from "./screens/Landingscreen";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Route path="/login" exact component={Loginscreen} />
        <Route path="/register" exact component={Registerscreen} />
        <Route path="/home" exact component={Homescreen} />
        <Route path="/book/:roomid/:fromdate/:todate" exact component={Bookingscreen}/>
        <Route path="/profile" exact component={Profilescreen}/>
        <Route path="/admin" exact component={Adminscreen}/>
        <Route path="/" exact component={Landingscreen}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
