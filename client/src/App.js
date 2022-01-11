import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Bookingscreen from './screens/Bookingscreen';
import Homescreen from './screens/Homescreen';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Route path="/home" exact component={Homescreen} />
        <Route path="/book/:roomid" component={Bookingscreen}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
