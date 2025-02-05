import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header className="header"/>
      <Main className="main"/>
      <Footer className="footer"/>
    </div>
  );
}

export default App;
