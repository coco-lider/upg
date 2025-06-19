import React from "react";

const ProductElement = () => {
  const [products] = useState(productsData)

  const formatPrice = (price) => {
    return new Intl.NumberFormat("uz-UZ").format(price)
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-600"}`} />
    ))
  }
  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-white">НОВИНКИ</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-gray-900 border border-gray-800 rounded-lg hover:border-pink-500 transition-colors group p-4"
              >
                {/* Product Image */}
                <div className="relative mb-4">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg bg-gray-800"
                  />
                  {product.isNew && (
                    <span className="absolute top-2 left-2 bg-pink-600 text-white text-xs px-2 py-1 rounded">
                      NEW
                    </span>
                  )}
                  <button className="absolute top-2 right-2 text-gray-400 hover:text-pink-500 transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>

                {/* Product Info */}
                <div className="space-y-3">
                  <h3 className="text-white font-medium text-sm line-clamp-2 group-hover:text-pink-400 transition-colors">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center space-x-1">
                    {renderStars(product.rating)}
                  </div>

                  {/* Price */}
                  <div className="space-y-1">
                    <div className="text-pink-500 font-bold text-lg">
                      {formatPrice(product.price)} сум
                    </div>
                    {product.originalPrice > product.price && (
                      <div className="text-gray-500 line-through text-sm">
                        {formatPrice(product.originalPrice)} сум
                      </div>
                    )}
                  </div>

                  {/* Add to Cart Button */}
                  <button className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-md transition-colors">
                    В корзину
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductElement;
