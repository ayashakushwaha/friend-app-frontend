// import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import ThankYouPage from "./components/ThankYouPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route exact path="/" element={<Form />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
