"use client"

import { useState, useEffect } from "react"
import { Search, ShoppingCart, User, Heart, Star, Moon, Sun } from "lucide-react"
import productsData from "../data/products.json"
import logo from "../assets/Logo.png"
import logo2 from "../assets/Logo2.png"

export default function GamingStore() {
  const [products] = useState(productsData)
  const [darkMode, setDarkMode] = useState(true)

  // LocalStorage dan dark mode holatini yuklash
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode")
    if (savedDarkMode !== null) {
      setDarkMode(JSON.parse(savedDarkMode))
    }
  }, [])

  // Dark mode o'zgarganda localStorage ga saqlash
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode))
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat("uz-UZ").format(price)
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : darkMode ? "text-gray-600" : "text-gray-400"}`}
      />
    ))
  }

  // Theme classes
  const themeClasses = {
    bg: darkMode ? "bg-black" : "bg-white",
    text: darkMode ? "text-white" : "text-gray-900",
    headerBg: darkMode ? "bg-black/95" : "bg-white/95",
    border: darkMode ? "border-gray-800" : "border-gray-200",
    cardBg: darkMode ? "bg-gray-900" : "bg-white",
    cardBorder: darkMode ? "border-gray-800" : "border-gray-200",
    cardHover: darkMode ? "hover:border-pink-500" : "hover:border-pink-400",
    inputBg: darkMode ? "bg-gray-900" : "bg-gray-100",
    inputBorder: darkMode ? "border-gray-700" : "border-gray-300",
    heroBg: darkMode ? "from-gray-900 via-black to-gray-900" : "from-gray-100 via-white to-gray-100",
    textSecondary: darkMode ? "text-gray-300" : "text-gray-600",
    textMuted: darkMode ? "text-gray-400" : "text-gray-500",
  }

  return (
    <div className={`min-h-screen ${themeClasses.bg} ${themeClasses.text} transition-colors duration-300`}>
      {/* Header */}
      <header className={`border-b ${themeClasses.border} ${themeClasses.headerBg} backdrop-blur-sm sticky top-0 z-50`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold">
                <img className={`w-[150px] h-[20px] ${darkMode ? 'block':'hidden'}`} src={logo} alt="" />
                <img className={`w-[150px] h-[20px] ${darkMode ? 'hidden':'block'}`} src={logo2} alt="" />
              </div>
            </div>

            {/* Search */}
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Search
                  className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${themeClasses.textMuted} w-4 h-4`}
                />
                <input
                  type="text"
                  placeholder="Qidiruv..."
                  className={`w-full pl-10 pr-4 py-2 ${themeClasses.inputBg} border ${themeClasses.inputBorder} rounded-md ${themeClasses.text} placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors`}
                />
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex items-center space-x-6">
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`flex items-center space-x-2 ${themeClasses.textSecondary} hover:text-pink-500 transition-colors`}
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                <span>{darkMode ? "Light" : "Dark"}</span>
              </button>

              <button
                className={`flex items-center space-x-2 ${themeClasses.textSecondary} hover:text-pink-500 transition-colors`}
              >
                <User className="w-4 h-4" />
                <span>Kirish</span>
              </button>
              <button
                className={`flex items-center space-x-2 ${themeClasses.textSecondary} hover:text-pink-500 transition-colors`}
              >
                <Heart className="w-4 h-4" />
                <span>Sevimlilar</span>
              </button>
              <button
                className={`flex items-center space-x-2 ${themeClasses.textSecondary} hover:text-pink-500 transition-colors`}
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Savatcha</span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`relative bg-gradient-to-r ${themeClasses.heroBg} py-20`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h1 className="text-6xl font-bold mb-4">
                <span className={themeClasses.textSecondary}>Lunacy</span>
              </h1>
              <h2 className="text-4xl font-bold mb-6">Lunacy One</h2>
              <div className="text-5xl font-bold mb-8">
                <span className={themeClasses.textMuted}>от </span>
                <span className={themeClasses.text}>1 170 000</span>
              </div>
              <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 text-lg font-semibold rounded-md transition-colors">
                ПОДРОБНЕЕ
              </button>
            </div>
            <div className="flex-1 flex justify-center">
              <img src="/hero-mouse.png" alt="Lunacy One Gaming Mouse" className="max-w-lg w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold mb-12 ${themeClasses.text}`}>НОВИНКИ</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className={`${themeClasses.cardBg} border ${themeClasses.cardBorder} rounded-lg ${themeClasses.cardHover} transition-colors group p-4 shadow-lg`}
              >
                {/* Product Image */}
                <div className="relative mb-4">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className={`w-full h-48 object-cover rounded-lg ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}
                  />
                  {product.isNew && (
                    <span className="absolute top-2 left-2 bg-pink-600 text-white text-xs px-2 py-1 rounded">NEW</span>
                  )}
                  <button
                    className={`absolute top-2 right-2 ${themeClasses.textMuted} hover:text-pink-500 transition-colors`}
                  >
                    <Heart className="w-4 h-4" />
                  </button>
                </div>

                {/* Product Info */}
                <div className="space-y-3">
                  <h3
                    className={`${themeClasses.text} font-medium text-sm line-clamp-2 group-hover:text-pink-400 transition-colors`}
                  >
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center space-x-1">{renderStars(product.rating)}</div>

                  {/* Price */}
                  <div className="space-y-1">
                    <div className="text-pink-500 font-bold text-lg">{formatPrice(product.price)} сум</div>
                    {product.originalPrice > product.price && (
                      <div className={`${themeClasses.textMuted} line-through text-sm`}>
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
  )
}