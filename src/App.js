import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CustomerDashboard from './components/CustomerDashboard/CustomerDashboard';
import UserDashboard from './components/UserDashboard/UserDashboard';
import './App.css';
import Login from './components/Login/Login';

function App() {
  const [token, setToken] = useState('Login');

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/customer" component={CustomerDashboard} />
          <Route path="/user" component={UserDashboard} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
