import './App.css';
import {Router, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <p>
          Crunch Kiosk
        </p>
        <div>
          <Link to="./pages/Shop.js">Shop page</Link>
        </div>
    </div>
  );
}

export default App;
