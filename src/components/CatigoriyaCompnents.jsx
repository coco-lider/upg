import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import 'swiper/css/navigation';

import "./style.css";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";

const CatigoriyaCompnents = () => {
  const navigate = useNavigate()
  const products = [
    {
      id: 1,
      name: "Клавиатура",
      image:
        "https://files.ox-sys.com/cache/original/image/d3/23/48/d32348b36c863e6fbcec18f69f0d2274d898db0eceda1675e89fd0ed08b7db0c.png",
      category: "keyboards",
    },
    {
      id: 2,
      name: "Мышь",
      image:
        "https://files.ox-sys.com/cache/original/image/d3/dd/68/d3dd6827ae0f9d8999e0573816c14d875a57220be0a7e4d85cc5c6fba3a5c428.png",
      category: "mice",
    },
    {
      id: 3,
      name: "Микрофон",
      image:
        "https://files.ox-sys.com/cache/original/image/96/07/95/96079505d678680959dc0583173ee6aec88d410293eceeac98f3d586b263bab3.png",
      category: "microphones",
    },
    {
      id: 4,
      name: "Наушники",
      image:
        "https://files.ox-sys.com/cache/original/image/ce/7a/d3/ce7ad3f5d18ab3247d08fcb5d54c6f0f4fcf1d2fb358cd58e7645a051f18b527.png",
      category: "headphones",
    },
    {
      id: 5,
      name: "Мониторы",
      image:
        "https://files.ox-sys.com/cache/original/image/7e/0a/e5/7e0ae5bd85f152a83a95341d111b6fe0e3b6e2153059db0eefc9e8a30c8871ca.png",
      category: "monitors",
    },
    {
      id: 6,
      name: "Кронштейны",
      image:
        "https://files.ox-sys.com/cache/original/image/be/17/38/be1738133cab1f5a7f60d6aedbdb67e08f5315c4c613d83e742fd3b25b9a7553.png",
      category: "brackets",
    },
    {
      id: 7,
      name: "Веб-камеры",
      image:
        "https://files.ox-sys.com/cache/original/image/2e/bf/fa/2ebffa53825ced446e5868fc9f51accfb1b41c77b0ebbfb5799ef620b33d741e.png",
      category: "webcams",
    },
    {
      id: 8,
      name: "Коврики",
      image:
        "https://files.ox-sys.com/cache/original/image/44/d4/91/44d4917eb0aae08938709e5201034f2cf8046f9b9d3f105c0accc763d8a0dcd6.png",
      category: "mousepads",
    },
  ];

  return (
    <div className="min-h-screen container p-4 mx-auto bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-6">
        <h1 className="text-xl font-bold tracking-wider">КОМПЛЕКТУЮЩИЕ</h1>
        <div className="flex items-center gap-2">
          <button className="swiper-button-prev-custom text-white px-2 py-1 bg-gray-700 rounded hover:bg-gray-600">
            ◀
          </button>
          <button className="swiper-button-next-custom text-white px-2 py-1 bg-gray-700 rounded hover:bg-gray-600">
            ▶
          </button>
        </div>
      </header>

      <Swiper
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <main className=" pb-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {products.map((product) => (
                <div
                  onClick={()=>navigate('/catigory')}
                  key={product.id}
                  className="bg-gray-900 rounded-lg p-4 hover:bg-gray-800 transition-colors cursor-pointer group"
                >
                  <div className="aspect-square bg-gray-800 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{product.name}</span>
                    <svg
                      className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <main className="px-6 pb-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-gray-900 rounded-lg p-4 hover:bg-gray-800 transition-colors cursor-pointer group"
                >
                  <div className="aspect-square bg-gray-800 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{product.name}</span>
                    <svg
                      className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </SwiperSlide>
      </Swiper>

      {/* Product Grid */}
    </div>
  );
};

export default CatigoriyaCompnents;
