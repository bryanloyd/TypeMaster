import "./app.css";
import Features from "./components/Features";
import Header from "./components/Header";
import Mechanical from "./components/Mechanical";
import Typemaster from "./components/Typemaster";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Typemaster />
      <Mechanical />
      <Features />
    </div>
  );
};

export default App;
