import React from 'react';
import { Route,Switch } from 'react-router-dom';
import Explore from './Pages/Explore';
import Home from './Pages/Home';
import Library from './Pages/Library'

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/explore" component={Explore}/>
        <Route exact path="/library" component={Library}/>
      </Switch>
    </>
  )
}

export default App;
