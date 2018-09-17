import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import PaslaugosList from './components/PaslaugosList'
import UzsakymaiList from './components/UzsakymaiList'
import Search from './components/Search'



class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      filterText: '',
      
    }
  }

  filterUpdate(value) {
    this.setState({
      filterText:value
    })
  }

  render() {


    /////ROUTINGAS////


    /////PASLAUGOS/////
    const Home = () => (
        <div>
          <center><h1>Paslaugos</h1></center>
          <PaslaugosList 
          data={this.props.data}
          filterText={this.state.filterText}
          /> 
        </div>
    );
    ////UŽSAKYMAI//////
    const uzsakymai = () => (
        <div>
          <center><h1>Užsakymai</h1></center>
          <UzsakymaiList 
          data2={this.props.data2}
          filterText={this.state.filterText}
          /> 
        </div>
    );

    /////PAGE////
    return (   
    <div> 
        <Router>
          <div>
            <ul>
              <li><Link to="/">Paslaugos</Link></li>
              <li><Link to="/uzsakymai">Užsakymai</Link></li>
            </ul>
            <Search 
            filterText={this.state.filterText}
            filterUpdate={this.filterUpdate.bind(this)}
            />
            <Route exact path="/" component={Home} />
            <Route path="/uzsakymai" component={uzsakymai} /> 
          </div>
        </Router>  
    </div>
    )
  
  }
}

export default App;
