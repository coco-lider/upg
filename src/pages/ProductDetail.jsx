import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getSingleProduct } from "../services/api";
import { Star } from "lucide-react";
import Header from "../components/Header";

export default function ProductDetail() {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["singleProduct", id],
    queryFn: getSingleProduct,
    enabled: !!id,
  });

  if (isLoading) return <div className="text-center p-10">Yuklanmoqda...</div>;
  if (isError) return <div className="text-center p-10 text-red-500">Xatolik!</div>;

  const specs = [
    { label: "Miqdori", value: "87" },
    { label: "O‘lchami", value: "365 × 136 × 40 mm" },
    { label: "Klaviatura turi", value: "Mexanik" },
    { label: "Switchlar", value: "Gateron Zilion Speed" },
    { label: "Ulanish", value: "USB" },
    { label: "Yoritish", value: "RGB" },
    { label: "Brand", value: "Dark Project" }
  ];

  return (
    <div className="bg-black text-white min-h-screen px-4">
      <Header/>
      {/* Breadcrumb */}
      <div className="text-sm text-gray-400 mb-4">
        <span className="hover:underline cursor-pointer">Bosh sahifa</span> /{" "}
        <span className="text-pink-500">Mahsulot</span>
      </div>

      {/* Image + Info */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-900 p-4 rounded-lg">
          <img
            src={data.image}
            alt={data.name}
            className="w-full rounded-lg object-cover"
          />
          <div className="flex gap-2 mt-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-16 h-16 bg-gray-800 rounded-md"></div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg space-y-4">
          <h1 className="text-2xl font-bold">{data.name}</h1>
          <div className="flex items-center gap-1 text-yellow-400">
            {[...Array(data.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400" />
            ))}
          </div>
          <p className="text-2xl font-semibold">{data.price.toLocaleString()} UZS</p>

          <div className="flex flex-col gap-2 mt-4">
            <button className="bg-pink-600 hover:bg-pink-700 text-white py-3 rounded">
              Sotib olish
            </button>
            <button className="border border-pink-600 hover:bg-pink-600 hover:text-white text-pink-500 py-3 rounded">
              🛒 Savatchaga qo‘shish
            </button>
          </div>

          <p className="text-sm text-gray-500">Ishlab chiqaruvchi: {data.category}</p>
        </div>
      </div>

      {/* Tabs: Xususiyatlar */}
      <div className="mt-10">
        <div className="flex border-b border-gray-700 text-sm">
          <button className="px-4 py-2 border-b-2 border-pink-600 text-white">
            Xususiyatlar
          </button>
          <button className="px-4 py-2 text-gray-400 hover:text-white">
            Tavsif
          </button>
        </div>

        <div className="bg-gray-900 p-6 rounded-b-lg">
          <table className="w-full text-sm">
            <tbody>
              {specs.map((s, i) => (
                <tr key={i} className="border-b border-gray-800">
                  <td className="py-2 text-gray-400">{s.label}</td>
                  <td className="py-2 text-white">{s.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Izohlar va form */}
      <div className="mt-12 bg-gray-900 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Izohlar</h2>
        <p className="text-sm text-gray-500 mb-4">Hozircha izoh yo‘q</p>

        <form className="space-y-4">
          <textarea
            placeholder="Izohingizni yozing..."
            className="w-full bg-gray-800 text-white p-4 rounded"
          ></textarea>
          <button className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-6 rounded">
            Izoh qoldirish
          </button>
        </form>
      </div>

      {/* O'xshash mahsulotlar */}
      <div className="mt-16">
        <h2 className="text-xl font-bold mb-4">O'xshash mahsulotlar</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((id) => (
            <div key={id} className="bg-gray-800 p-4 rounded-lg">
              <div className="bg-gray-700 h-32 rounded mb-2"></div>
              <p className="text-sm text-white">Mahsulot nomi</p>
              <p className="text-pink-500 text-sm">100 000 UZS</p>
            </div>
          ))}
        </div>
      </div>

      <div className="h-10" />
    </div>
  );
}
