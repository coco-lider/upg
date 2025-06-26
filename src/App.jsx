import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GamingStore from "./pages/GamingStore";
import ProductDetail from "./pages/ProductDetail";
import CategoryPage from "./pages/CategoryPage";

// QueryClient ni yaratamiz
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GamingStore />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/catigory" element={<CategoryPage/>} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
