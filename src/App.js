import "./app.css";
import Features from "./components/Features";
import Header from "./components/Header";
import Mechanical from "./components/Mechanical";
import Typemaster from "./components/Typemaster";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Typemaster />
      <Mechanical />
      <Features />
      <Footer />
    </div>
  );
};

export default App;
