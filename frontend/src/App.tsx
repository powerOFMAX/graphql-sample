import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MessageList from './components/MessageList';
import MessageForm from './components/MessageForm';
import { Navigation } from './components/NavBar';

function App() {
  return (
    <Router>
      <Navigation />
      <div className="containers">
        <Switch>
          <Route exact path="/" component={MessageList}/>
          <Route exact path="/new" component={MessageForm}/>
        </Switch>
      </div>
    </Router>
  );
} 

export default App;
