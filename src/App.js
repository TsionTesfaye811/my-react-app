import React from 'react';
import ColorPickerApp from './components/color-picker-app/App';
// import CardComponents from './components/card-components/App';  // for later

function App() {
  return (
    <div>
      {/* Switch which app to render by commenting/uncommenting */}
      <ColorPickerApp />
      {/* <CardComponents /> */}
    </div>
  );
}

export default App;
