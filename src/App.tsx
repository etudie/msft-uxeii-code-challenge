import { useState } from 'react';
import './App.css';
import Dog from './components/Dog';
import Header from './components/Header';
import Search from './components/Search';
import Collection from './components/Collection';
import Menu from './components/Menu';


function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [breed, setBreed] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Search setSearchTerm={setSearchTerm} />
        <Menu setBreed={setBreed}/>
      </header>
      <body>
        <div className="App-collection-container">
          <Collection  searchTerm={searchTerm} breed={breed}/>
        </div>
      </body>
    </div>
  );
}

export default App;
