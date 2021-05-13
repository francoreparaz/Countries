import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Countries from "./Countries";
import LandingPage from './LandingPage';

function App() {
  return (
    <Router>

    <div className="App">
    <Route exact path="/" component={LandingPage}/>
     <Route path="/Countries" component={Countries}/>
    </div>
    </Router>
  );
}

export default App;
