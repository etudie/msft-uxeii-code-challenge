import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <img src="woofer.svg" className="App-logo" alt="logo" />
        <p>
          Woofer
        </p>
        <p className="small">
          An Innovation & Technology team challenge
        </p>
      </header>
    </div>
  );
}

export default App;
