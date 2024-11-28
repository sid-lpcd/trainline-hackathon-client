import { useState } from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import ExplorePage from "./pages/ExplorePage/ExplorePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
        </Routes>
      </div>
      <Navigation />
    </>
  );
}

export default App;
