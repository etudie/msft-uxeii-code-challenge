import './App.css';
import Dog from './components/Dog';
import Header from './components/Header';
import Search from './components/Search';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Search/>
      </header>
      <body>
        <div className="App-collection-container">
        <Dog image="https://images.dog.ceo/breeds/terrier-tibetan/n02097474_2913.jpg" title="Appenzeller"/>
        <Dog image="https://images.dog.ceo/breeds/terrier-tibetan/n02097474_2913.jpg" title="Appenzeller"/>
        <Dog image="https://images.dog.ceo/breeds/terrier-tibetan/n02097474_2913.jpg" title="Appenzeller"/>
        <Dog image="https://images.dog.ceo/breeds/terrier-tibetan/n02097474_2913.jpg" title="Appenzeller"/>
        <Dog image="https://images.dog.ceo/breeds/terrier-tibetan/n02097474_2913.jpg" title="Appenzeller"/>
        <Dog image="https://images.dog.ceo/breeds/terrier-tibetan/n02097474_2913.jpg" title="Appenzeller"/>
        <Dog image="https://images.dog.ceo/breeds/terrier-tibetan/n02097474_2913.jpg" title="Appenzeller"/>
        </div>
      </body>
    </div>
  );
}

export default App;
