import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from './components/Login';
import Questions from './components/Questions';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <Switch>
        <Route path='/' exact render={props => <Login setUser={setUser} />} />
        <Route path='/questions' render={props => user ? <Questions {...props} user={user} /> : <Redirect to='/' />} />
        <Route component={() => 404} />
      </Switch>
    </div>
  );
}

export default App;
