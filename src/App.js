import React from 'react';
import People from './People'
import Trip from './trip-details'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import  Nav from './nav'
function App() {
  return (
      <Router>
        <div className="App">
          <Nav/>
          <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/about"  component={About}/>
              <Route path="/trips" exact component={People}/>
              <Route path= "/trip/:id" component={Trip} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
function Home() {
    return(
        <div>
            <h1>Home Page</h1>
        </div>
    )
}
function About() {
    return(
        <div>
            <h1>About</h1>
        </div>
    )
}
// function Shop() {
//     return(
//         <div>
//             <h1>Shop</h1>
//         </div>
//     )
// }