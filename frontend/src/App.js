import "./styles/App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import TokenContextProvider from "./context/userContext";

function App() {
  return (
    <TokenContextProvider>
      <Header />
      <Main />
      <Footer />
    </TokenContextProvider>
  );
}

export default App;
