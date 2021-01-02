import HomePage from './components/HomePage'
import "./App.css"
import Navbar from './components/Navbar';
import Blogs from './components/Blogs';
function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <Blogs/>
    </div>
  );
}

export default App;
