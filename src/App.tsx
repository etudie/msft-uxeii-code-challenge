import { useState } from 'react';
import './App.css';
import Dog from './components/Dog';
import Header from './components/Header';
import Search from './components/Search';
import Collection from './components/Collection';
import Menu from './components/Menu';


function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Search setSearchTerm={setSearchTerm} />
        <Menu setSearchTerm={setSearchTerm}/>
      </header>
      <body>
        <div className="App-collection-container">
          <Collection  searchTerm={searchTerm} />
        </div>
      </body>
    </div>
  );
}

export default App;
