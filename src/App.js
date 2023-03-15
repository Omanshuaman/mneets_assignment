import "./App.css";
import Header from "./components/header/Header";
import HeroBanner from "./components/herobanner/HeroBanner";
import MenuBar from "./components/menubar/MenuBar";

function App() {
  return (
    <div className="App">
      <HeroBanner />
      <Header />
      <MenuBar />
    </div>
  );
}

export default App;
