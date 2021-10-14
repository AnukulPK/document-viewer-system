import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CustomerDashboard from './components/CustomerDashboard/CustomerDashboard';
import UserDashboard from './components/UserDashboard/UserDashboard';

import './App.css';
import Login from './components/Login/Login';

function App() {
  const [token, setToken] = useState('Login');

  if (token === 'Login') {
    return <Login />;
  }

  return (
    <>
      <h1>Document Viewer System</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/customer">
            <CustomerDashboard />
          </Route>
          <Route path="/user">
            <UserDashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
