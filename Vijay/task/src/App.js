import { useState } from 'react';
import './App.css';
import Basic from './component/pages/Form';
import Page from './Page';

function App() {
  const [value,setValue] = useState(false)
  return (
    <div className='App'>
     {(!value)?<Basic setValue={setValue}/>: <Page setValue={setValue} />}
    </div>
  );
}

export default App;
