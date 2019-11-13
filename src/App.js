import React,{ Component } from 'react';
import Welcome from'./Components/WelcomePage'
import { Switch, Route  } from 'react-router-dom'
import './index.css'

class App extends Component {
  
  render() {
  return (
    <>
       <Switch>
        <Route exact path='/' component={Welcome}></Route>
      </Switch>
     
    </ >
   )}}
   
  export default App;
