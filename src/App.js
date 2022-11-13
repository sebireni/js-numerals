import './App.css';
import Home from './pages/Home';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
