import { useState } from "react";
import productsData from "../data/products.json";
import Header from "../components/Header";
import ImageSlider from "../components/ImageSlider";
import ProductList from "../components/ProductList";
import { useAppContext } from "../context/AppProvider";
import CatigoriyaCompnents from "../components/CatigoriyaCompnents";

export default function GamingStore() {
  const [products] = useState(productsData);
  const { themeClasses } = useAppContext();
  const { bg, text } = themeClasses;

  return (
    <div className={`min-h-screen ${bg} ${text} transition-colors duration-300`}>
      <Header />
      <ImageSlider />
      <ProductList products={products} />
      <CatigoriyaCompnents/>
    </div>
  );
}
