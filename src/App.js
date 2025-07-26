import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./component/Dashboard";
import { Route, Routes } from "react-router-dom";
import PrivacyPolicy from "./component/PrivacyPolicy";
import RefundPolicy from "./component/RefundPolicy";

function App() {
  return (
  <Routes>
  <Route path="/" element={<Dashboard />} />
  <Route path="/privacypolicy" element={<PrivacyPolicy />} />
  <Route path="/refundpolicy" element={<RefundPolicy />} />
</Routes>
  );
}

export default App;
