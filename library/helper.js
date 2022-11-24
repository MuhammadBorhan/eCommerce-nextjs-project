const BASE_URL = "http://localhost:3000";

// all products
export const getAllProduct = async () => {
  const res = await fetch(`${BASE_URL}/api/products`);
  const products = await res.json();
  return products;
};

// single product
export const getSingleProduct = async (productId) => {
  const res = await fetch(`${BASE_URL}/api/users/${productId}`);
  const product = await res.json();
  if (product) return product;
  return {};
};
