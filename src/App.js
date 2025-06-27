import React from 'react';
import UserGreeting from './components/user-greeting/App';

function App() {
  return (
    <div className="p-4">
      <UserGreeting isLoggedIn={true} username="Tsion" />
    </div>
  );
}

export default App;
