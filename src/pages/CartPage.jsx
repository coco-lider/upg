// pages/CartPage.jsx
import { Minus, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const [promoCode, setPromoCode] = useState("");
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = subtotal * 0.2;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 py-4">
        <div className="text-sm text-gray-500"><NavLink to="/">Home</NavLink> / Cart</div>
      </div>

      <div className="container mx-auto px-4 pb-12">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start space-x-4">
                  <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                        <div className="text-sm text-gray-600">
                          <div>Size: <span className="text-black">{item.size}</span></div>
                          <div>Color: <span className="text-black">{item.color}</span></div>
                        </div>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="text-xl font-bold">${item.price}</div>
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 hover:bg-gray-50"><Minus className="h-4 w-4" /></button>
                        <span className="px-4 py-2 border-x border-gray-300">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 hover:bg-gray-50"><Plus className="h-4 w-4" /></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="border border-gray-200 rounded-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600"><span>Subtotal</span><span>${Math.ceil(subtotal)}</span></div>
                <div className="flex justify-between text-gray-600"><span>Discount (-20%)</span><span className="text-red-500">-${discount.toFixed(0)}</span></div>
                <div className="flex justify-between text-gray-600"><span>Delivery Fee</span><span>${deliveryFee}</span></div>
                <hr />
                <div className="flex justify-between text-lg font-semibold"><span>Total</span><span>${total.toFixed(0)}</span></div>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    placeholder="Promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-sm"
                  />
                  <button className="bg-black text-white px-5 py-3 rounded-lg font-medium hover:bg-gray-800">Apply</button>
                </div>
                <button className="w-full bg-black text-white py-4 rounded-lg font-medium hover:bg-gray-800 text-lg">
                  Go to Checkout →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
