import "./app.css";
import Header from "./components/Header";
import Mechanical from "./components/Mechanical";
import Typemaster from "./components/Typemaster";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Typemaster />
      <Mechanical />
    </div>
  );
};

export default App;
