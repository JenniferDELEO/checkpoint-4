import "./styles/App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <Main />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
