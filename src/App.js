import './App.css';
import Navbar from './components/Navbar';
import Blog from './components/Blog';
import Related from './components/Related';

function App() {
  return (
    <main>
      <Navbar />
      <Blog/>
      <Related />
    </main>
  );
}

export default App;
