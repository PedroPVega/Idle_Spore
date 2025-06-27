import MainScreen from '../pages/MainScreen';
import LowerNavBar from './LowerNavBar';
import UpperNavBar from './UpperNavBar';
import logo from '../assets/logo.svg';
import './App.css';

function App() {

  return(
    <div className="App">
      <header><UpperNavBar/></header>
      <body><MainScreen/></body>
      <footer><LowerNavBar/></footer>
    </div>
  );
}

export default App;
