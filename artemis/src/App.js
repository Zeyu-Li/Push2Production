import logo from './logo.svg';
import './App.css';
import Main from './Main.js';
import Calendar from './Calendar.js';
import Summary from './Summary.js'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Main>
        <Calendar />
        <Summary />
      </Main>
    </div>
  );
}

export default App;
