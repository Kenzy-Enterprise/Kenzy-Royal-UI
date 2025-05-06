import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import SinglePage from "./pages/SinglePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index={true} element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:id" element={<SinglePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
