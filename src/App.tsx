import { Route, Routes } from "react-router-dom";
import { ProductsPage } from "./pages/ProductsPage";
import { AboutPage } from "./pages/AboutPage";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route
          path="https://eugene015.github.io/react-product-list/"
          element={<ProductsPage />}
        />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
