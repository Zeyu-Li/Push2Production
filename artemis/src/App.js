import react, {Component, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Main.js'
import Calendar from './Calendar.js'
import Summary from './Summary.js'
import Settings from './Settings.js'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [tab, setTab] = useState("home")

  const doTab = () => {
    if (tab == "home") {
      return <Calendar />
    } else if (tab == "summary") {
      return <Summary />
    } else {
      return <Settings />
    }
  }

  return (
    <div className="App">
      <Main setTab={setTab}>
        {doTab()}
      </Main>
    </div>
  )
}

export default App;
