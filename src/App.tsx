import { Route, Routes } from "react-router-dom";
import { ProductsPage } from "./pages/ProductsPage";
import { AboutPage } from "./pages/AboutPage";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/react-product-list/" element={<ProductsPage />} />
        <Route path="/react-product-list/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
