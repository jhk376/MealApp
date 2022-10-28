
import './App.css';
import Favourites from './components/Favourites';
import Meals from './components/Meals';
import Modal from './components/Modal';
import Search from './components/search';

function App() {
  return (
    <main>Meals App
      <Favourites/>
      <Meals/>
      <Modal />
      <Search />
    
    </main>
  );
}

export default App;
