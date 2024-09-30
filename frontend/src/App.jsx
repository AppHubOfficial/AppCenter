import { useState } from 'react';
import './App.css';

function App() {
  const [apps, setApps] = useState([
    { id: 1, name: 'App 1', description: 'This is a description for App 1.' },
    { id: 2, name: 'App 2', description: 'This is a description for App 2.' },
    { id: 3, name: 'App 3', description: 'This is a description for App 3.' }
  ]);

  return (
    <div>
      
      
    </div>
  );
}

export default App;
