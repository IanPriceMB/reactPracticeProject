import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Landing from "./pages/Landing";
import Choice from "./pages/Choice";
import Payment from "./pages/Payment";
import Signin from "./pages/Signin";
import Home from "./pages/Home";

const App = () => (
    <Router>
      <div>
      <Route exact path="/" component={Landing} />
      <Route exact path="/choice" component={Choice} />
      <Route exact path="/payment" component={Payment} />
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/home" component={Home} />
      </div>
    </Router>
);

export default App;
