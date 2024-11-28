import { useState } from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SearchPage from "./pages/SearchPage/SearchPage";
import PaymentPage from "./pages/PaymentPage/PaymentPage";
import BookingConfirmation from "./pages/BookingConfirmation/BookingConfirmation";
import TicketPage from "./pages/TicketPage/TicketPage";
import SelectionPage from "./pages/SelectionPage/SelectionPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Header /> */}
      <main>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/selection" element={<SelectionPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/booking" element={<BookingConfirmation />} />
          <Route path="/ticket" element={<TicketPage />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
