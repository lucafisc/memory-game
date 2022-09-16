import "./styles/App.css";
import "./styles/Animations.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Footer level={3} />
    </div>
  );
}

export default App;
