import { Heart, Star } from "lucide-react";
import { useAppContext } from "../context/AppProvider";
import { Link, useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const { darkMode, themeClasses } = useAppContext();
  const { text, textMuted, cardBg, cardBorder, cardHover } = themeClasses;
  const navitage = useNavigate();


  const formatPrice = (price) => new Intl.NumberFormat("uz-UZ").format(price);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating
            ? "fill-yellow-400 text-yellow-400"
            : darkMode
            ? "text-gray-600"
            : "text-gray-400"
        }`}
      />
    ));
  };

  return (
    <div
    onClick={()=>navitage(`/product/${product.id}`)}
      className={`${cardBg} border ${cardBorder} rounded-lg ${cardHover} transition-colors group p-4 shadow-lg`}
    >
      <div className="relative mb-4">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className={`w-full h-48 object-cover rounded-lg ${
            darkMode ? "bg-gray-800" : "bg-gray-100"
          }`}
        />
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-pink-600 text-white text-xs px-2 py-1 rounded">
            NEW
          </span>
        )}
        <button
          className={`absolute top-2 right-2 ${textMuted} hover:text-pink-500`}
        >
          <Heart className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-3">
        <h3 className="font-medium text-sm line-clamp-2 group-hover:text-pink-400">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <div className="flex items-center space-x-1">
          {renderStars(product.rating)}
        </div>
        <div className="space-y-1">
          <div className="text-pink-500 font-bold text-lg">
            {formatPrice(product.price)} сум
          </div>
          {product.originalPrice > product.price && (
            <div className={`${textMuted} line-through text-sm`}>
              {formatPrice(product.originalPrice)} сум
            </div>
          )}
        </div>
        <button className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-md transition-colors">
          В корзину
        </button>
      </div>
    </div>
  );
}
