import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Navbar from './components/CustomNavbar';

class App extends Component {
  render() {
    return (
      <Router>
      <div >
        <Navbar/>
        <Route exact path ="/" component={Home}/>
        <Route path ="/about" component={About}/>
        <Route path='/tutorial' component={() => window.location = 'https://youtu.be/jgVkR5EKI68'}/>
        <Route path ="/news" component={News}/>
      </div>
      </Router>
    );
  }
}

export default App;
// const Main = () => <h1>Hello world</h1>;

// ReactDOM.render(
//   <Router>
//     <Route path='/' component={Main} />
//   </Router>,
//   document.getElementById('app')
// );

