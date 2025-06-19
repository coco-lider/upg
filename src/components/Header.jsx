import React from 'react'

const Header = () => {
  return (
    <div>
            <header className="border-b border-gray-800 bg-black/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold">
                <span className="text-white">UPG</span>
                <span className="text-pink-500">STORE</span>
              </div>
            </div>

            {/* Search */}
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Qidiruv..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-pink-500"
                />
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex items-center space-x-6">
              <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                <User className="w-4 h-4" />
                <span>Kirish</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                <Heart className="w-4 h-4" />
                <span>Sevimlilar</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                <ShoppingCart className="w-4 h-4" />
                <span>Savatcha</span>
              </button>
            </nav>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
