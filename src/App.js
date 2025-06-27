import React from 'react';
import Student from './components/Student/App';

function App() {
  return (
    <div className="p-4">
      <Student 
        name="Tsion" 
        age={22} 
        isStudent={true} 
      />
    </div>
  );
}

export default App;
