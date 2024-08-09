import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AddItem from './Components/AddItem';
import Home from './Components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import ItemList from './Components/ItemList';
import Footer from './Components/Footer';
import BagCard from './Components/BagCard';
import BagDetail from './Components/BagDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addItems" element={<AddItem />} />
            <Route path="/items" element={<ItemList />} />
            <Route path="/bag" element={<BagCard />} />
            <Route path="/bag/:id" element={<BagDetail />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
