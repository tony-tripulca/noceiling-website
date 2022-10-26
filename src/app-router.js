import { Route, Routes } from "react-router-dom";

import Home from "./modules/LandingPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
}
