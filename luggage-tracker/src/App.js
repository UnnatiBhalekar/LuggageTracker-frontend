import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddItem from './Components/AddItem';
import Home from './Components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import ItemList from './Components/ItemList';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className='content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addItems" element={<AddItem />} />
            <Route path="/items" element={<ItemList />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
