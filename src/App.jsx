import { BrowserRouter, Route, Routes } from "react-router";
import { Toaster } from "react-hot-toast";
import "./App.css";

import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import SinglePage from "./pages/SinglePage";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />

      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index={true} element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:id" element={<SinglePage />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
