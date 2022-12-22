import { Route, Switch } from 'react-router';
import Home from './components/Home';
import Booking from './components/Booking';
import Login from './components/Login';
import Register from './components/Register';
import Payment from './components/Payment';
import ErrorWorld from './components/ErrorWorld';
import Admin from './components/Admin';
import AddFlight from './components/AddFlight';
import FlightListAdmin from './components/FlightListAdmin';
import Passengers from './components/Passengers';
import Ticket from './components/Ticket' 

import UpdateFlight from './components/UpdateFlight';
import Summary from './components/Summary';
import Seats from './components/Seats';

import Feedback from './components/Feedback';


function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/booking" component={Booking} />
        <Route path="/passengers" component={Passengers} />
        <Route path="/ticket" component={Ticket} />
        
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/payment" component={Payment} />
        <Route path="/summary" component={Summary} />
        <Route path="/admin" component={Admin} />
        <Route path="/addFlight" component={AddFlight} />
        <Route path="/allFlights" component={FlightListAdmin} />
        <Route path="/updateFlight" component={UpdateFlight} />
        <Route path="/seats" component={Seats} />
        <Route path="/feedback" component={Feedback} />
        
        <Route component={ErrorWorld} />
        
      </Switch>
    </main>
  );
}

export default App;
