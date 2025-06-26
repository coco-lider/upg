import products from "../data/products.json";

export const getSingleProduct = async ({ queryKey }) => {
  const id = parseInt(queryKey[1]);
  const product = products.find((item) => item.id === id);

  if (!product) throw new Error("Mahsulot topilmadi");

  return {
    ...product,
    images: product.images || [product.image], // fallback
    reviews: [
      {
        id: 1,
        reviewerName: "Ali",
        rating: product.rating || 5,
        comment: "Zo‘r mahsulot!"
      },
      {
        id: 2,
        reviewerName: "Vali",
        rating: product.rating || 4,
        comment: "Narxiga yarasha yaxshi."
      }
    ]
  };
};
