import React from "react";
import { HomePage } from "./pages/HomePage";
import { VisitorHomePage } from "./pages/VisitorHomePage";

function App() {
  const user = false;
  return <>{user ? <HomePage /> : <VisitorHomePage />}</>;
}

export default App;
