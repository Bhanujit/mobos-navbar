import logo from './logo.svg';
import './App.css';
import { Navbar } from './Navbar/Navbar';


function App() {
  return (
    <div>
      <Navbar/>
      <div className='App'>      
      <h1>Mobile Operating system</h1>
      <ul>
      <li><strong>Androaid</strong></li>
      <li><strong>Blackberry</strong></li>
      <li><strong>Iphone</strong></li>
      <li><strong>Windows Phone</strong></li>
      </ul>
      <h1>Mobile Manufacturers</h1>
      <ul>
        <li className="square"><strong>Samsung</strong></li>
        <li className="square"><strong>Apple</strong></li>
        <li className="round"><strong>Micromax</strong></li>
        <li className="circle"><strong>Asus</strong></li>
      </ul>
      </div>
      
    </div>
  );
}

export default App;
