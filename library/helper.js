const BASE_URL = "http://localhost:3000";
const CART_URL = "http://localhost:3000";

// all products
export const getAllProduct = async () => {
  const res = await fetch(`${BASE_URL}/api/products`);
  const products = await res.json();
  return products;
};

// all products for add to cart
export const getAllCartProduct = async () => {
  const res = await fetch(`${BASE_URL}/api/buyproduct`);
  const products = await res.json();
  return products;
};

// single product
export const getSingleProduct = async (productId) => {
  const res = await fetch(`${BASE_URL}/api/products/${productId}`);
  const product = await res.json();
  if (product) return product;
  return {};
};

// create new productc
export const createProduct = async (datas) => {
  try {
    const Options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datas),
    };
    const res = await fetch(`${BASE_URL}/api/products`, Options);
    const newProduct = await res.json();
    return newProduct;
  } catch (error) {
    return error;
  }
};

// create new productc for add to cart
export const createCartProduct = async (datas) => {
  try {
    const Options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datas),
    };
    const res = await fetch(`${BASE_URL}/api/buyproduct`, Options);
    const newProduct = await res.json();
    return newProduct;
  } catch (error) {
    return error;
  }
};
