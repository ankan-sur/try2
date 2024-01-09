import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Greeting'; 


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          {/* Other routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
