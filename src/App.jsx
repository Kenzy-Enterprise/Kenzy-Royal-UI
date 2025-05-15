import { BrowserRouter, Route, Routes } from "react-router";
import { Toaster } from "react-hot-toast";
import "./App.css";

import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import SinglePage from "./pages/SinglePage";
import Contact from "./pages/Contact";
import DashboardLayout from "./components/DashboardLayout";
import AdminDashboard from "./pages/AdminDashboard";
import AddProduct from "./pages/AddProduct";
import DashOverview from "./pages/DashOverview";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />

      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:id" element={<SinglePage />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route path="/admindash" element={<DashboardLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="add" element={<AddProduct />} />
          <Route path="overview" element={<DashOverview />} />
        </Route>

        <Route path="/admindash/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
