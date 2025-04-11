import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index={true} element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
