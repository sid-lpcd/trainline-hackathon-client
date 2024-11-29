import { useState } from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import SearchPage from "./pages/SearchPage/SearchPage";
import PaymentPage from "./pages/PaymentPage/PaymentPage";
import BookingConfirmation from "./pages/BookingConfirmation/BookingConfirmation";
import TicketPage from "./pages/TicketPage/TicketPage";
import SelectionPage from "./pages/SelectionPage/SelectionPage";
import Navigation from "./components/Navigation/Navigation";
import ExplorePage from "./pages/ExplorePage/ExplorePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/selection" element={<SelectionPage />} />
          <Route path="/payment/:location?" element={<PaymentPage />} />
          <Route path="/booking" element={<BookingConfirmation />} />
          <Route path="/ticket" element={<TicketPage />} />
          <Route path="/explore" element={<ExplorePage />} />
        </Routes>
      </div>
      <Navigation />
    </>
  );
}

export default App;
