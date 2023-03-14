import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Blog from './components/Blog';
import Recommended from './components/Recommended';
import Related from './components/Related';

function App() {
  return (
    <main>
      <Navbar />
      <Blog/>
      <Related />
    </main>
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
