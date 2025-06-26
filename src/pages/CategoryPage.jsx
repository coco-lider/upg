"use client"

import { useState } from "react"
import { Heart, Star } from "lucide-react"
import Header from "../components/Header"

const products = [
  {
    id: 1,
    name: "HyperX Gaming HXHSCR-GM-WW Black",
    price: "3 990 ₽",
    oldPrice: "4 500 ₽",
    rating: 5,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "HyperX Gaming Headset Wireless Black",
    price: "8 990 ₽",
    oldPrice: "9 500 ₽",
    rating: 5,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Corsair HS70 Black",
    price: "7 990 ₽",
    oldPrice: "8 500 ₽",
    rating: 4,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    name: "HyperX Cloud Stinger Pro Microphone Black",
    price: "4 990 ₽",
    oldPrice: "5 500 ₽",
    rating: 5,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 5,
    name: "Razer Wireless RGB Black",
    price: "12 990 ₽",
    oldPrice: "13 500 ₽",
    rating: 5,
    image: "/placeholder.svg?height=200&width=200",
  },
]

const categories = ["Игровые гарнитуры", "Клавиатуры", "Мыши"]
const brands = ["HyperX", "Corsair", "Logitech", "Razer"]
const priceRanges = ["До 3 000 ₽", "3 000 - 5 000 ₽", "5 000 - 8 000 ₽", "8 000 - 12 000 ₽", "Свыше 12 000 ₽"]

export default function CategoryPage() {
  const [favorites, setFavorites] = useState([])
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedBrands, setSelectedBrands] = useState([])
  const [selectedPrices, setSelectedPrices] = useState([])
  const [features, setFeatures] = useState({ wireless: false, microphone: false, rgb: false })

  const toggleFavorite = (productId) => {
    setFavorites((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))
  }

  const toggleCheckbox = (value, selected, setSelected) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    )
  }

  const handleFeatureChange = (feature) => {
    setFeatures((prev) => ({ ...prev, [feature]: !prev[feature] }))
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${i < rating ? "fill-pink-500 text-pink-500" : "fill-gray-600 text-gray-600"}`}
      />
    ))
  }

  const filteredProducts = products.filter((product) => {
    const matchCategory = selectedCategories.length === 0 || selectedCategories.includes("Игровые гарнитуры")

    const matchBrand = selectedBrands.length === 0 || selectedBrands.some((brand) => product.name.includes(brand))

    const numericPrice = parseInt(product.price.replace(/\D/g, ""))
    const matchPrice =
      selectedPrices.length === 0 ||
      selectedPrices.some((range) => {
        if (range === "До 3 000 ₽") return numericPrice < 3000
        if (range === "3 000 - 5 000 ₽") return numericPrice >= 3000 && numericPrice <= 5000
        if (range === "5 000 - 8 000 ₽") return numericPrice > 5000 && numericPrice <= 8000
        if (range === "8 000 - 12 000 ₽") return numericPrice > 8000 && numericPrice <= 12000
        if (range === "Свыше 12 000 ₽") return numericPrice > 12000
        return true
      })

    const nameLower = product.name.toLowerCase()
    const matchFeatures =
      (!features.wireless || nameLower.includes("wireless")) &&
      (!features.microphone || nameLower.includes("microphone")) &&
      (!features.rgb || nameLower.includes("rgb"))

    return matchCategory && matchBrand && matchPrice && matchFeatures
  })

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <div className="flex max-w-7xl mx-auto">
        <aside className="w-64 bg-black p-4 min-h-screen space-y-6">
          <div>
            <h3 className="text-sm font-semibold mb-3 text-gray-300">КАТЕГОРИИ</h3>
            {categories.map((cat, i) => (
              <div key={i} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  onChange={() => toggleCheckbox(cat, selectedCategories, setSelectedCategories)}
                  checked={selectedCategories.includes(cat)}
                  className="w-4 h-4 text-pink-600 bg-gray-700 border-gray-600"
                />
                <label className="text-sm text-gray-300">{cat}</label>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-3 text-gray-300">БРЕНДЫ</h3>
            {brands.map((brand, i) => (
              <div key={i} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  onChange={() => toggleCheckbox(brand, selectedBrands, setSelectedBrands)}
                  checked={selectedBrands.includes(brand)}
                  className="w-4 h-4 text-pink-600 bg-gray-700 border-gray-600"
                />
                <label className="text-sm text-gray-300">{brand}</label>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-3 text-gray-300">ЦЕНА</h3>
            {priceRanges.map((range, i) => (
              <div key={i} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  onChange={() => toggleCheckbox(range, selectedPrices, setSelectedPrices)}
                  checked={selectedPrices.includes(range)}
                  className="w-4 h-4 text-pink-600 bg-gray-700 border-gray-600"
                />
                <label className="text-sm text-gray-300">{range}</label>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-3 text-gray-300">ОСОБЕННОСТИ</h3>
            {["wireless", "microphone", "rgb"].map((feat) => (
              <div key={feat} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  onChange={() => handleFeatureChange(feat)}
                  checked={features[feat]}
                  className="w-4 h-4 text-pink-600 bg-gray-700 border-gray-600"
                />
                <label className="text-sm text-gray-300 capitalize">{feat}</label>
              </div>
            ))}
          </div>
        </aside>

        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-2">Игровые гарнитуры</h1>
          <p className="text-gray-400">Найдено {filteredProducts.length} товаров</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-gray-800 border border-gray-700 rounded-lg hover:border-pink-500 transition-colors"
              >
                <div className="p-4">
                  <div className="relative mb-4">
                    <img src={product.image} alt={product.name} className="w-full h-48 object-contain rounded" />
                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className="absolute top-2 right-2 p-2 bg-gray-900/80 rounded-full"
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          favorites.includes(product.id) ? "fill-pink-500 text-pink-500" : "text-gray-400"
                        }`}
                      />
                    </button>
                  </div>
                  <div className="space-y-2">
                    <div className="flex">{renderStars(product.rating)}</div>
                    <h3 className="text-sm font-medium">{product.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold">{product.price}</span>
                      <span className="line-through text-sm text-gray-400">{product.oldPrice}</span>
                    </div>
                    <button className="w-full bg-pink-600 hover:bg-pink-700 py-2 rounded text-sm">В корзину</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
