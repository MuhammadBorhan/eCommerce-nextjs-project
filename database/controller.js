import BuyProduct from "../model/buyproduct";
import Products from "../model/products";

export async function getProducts(req, res) {
  try {
    const products = await Products.find({});
    if (!products) return res.status(404).json({ error: "Data not found" });
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ error: "Error while fetching data" });
  }
}

// for buy product
export async function getBuyProducts(req, res) {
  try {
    const buyproduct = await BuyProduct.find({});
    if (!buyproduct) return res.status(404).json({ error: "Data not found" });
    res.status(200).json(buyproduct);
  } catch (error) {
    res.status(404).json({ error: "Error while fetching data" });
  }
}

export async function getProduct(req, res) {
  try {
    const { productId: productsId } = req.query;
    if (productsId) {
      const product = await Products.findById(productsId);
      res.status(200).json(product);
    }
    return res.status(404).json({ error: "User Not Selected..." });
  } catch (error) {
    return res.status(404).json({ error: "Can not get user" });
  }
}

export async function createProduct(req, res) {
  try {
    const datas = req.body;
    if (!datas) {
      return res.status(404).json({ error: "data not provided..!!!" });
    }
    Products.create(datas, (err, data) => {
      return res.status(201).json(data);
    });
  } catch (error) {
    return res.status(404).json({ error });
  }
}

// for create new buyproduct
export async function createBuyProduct(req, res) {
  try {
    const datas = req.body;
    if (!datas) {
      return res.status(404).json({ error: "data not provided..!!!" });
    }
    BuyProduct.create(datas, (err, data) => {
      return res.status(201).json(data);
    });
  } catch (error) {
    return res.status(404).json({ error });
  }
}

export async function updateProduct(req, res) {
  try {
    const { productId } = req.query;
    const datas = req.body;
    if (productId && datas) {
      const product = await Products.findByIdAndUpdate(productId, datas);
      res.status(200).json(product);
    }
    res.status(404).json({ error: "User not selected.." });
  } catch (error) {
    return res
      .status(404)
      .json({ error: "Error while updating the data...!!" });
  }
}

export async function deleteProduct(req, res) {
  try {
    const { productId } = req.query;
    if (productId) {
      const product = await Products.findByIdAndDelete(productId);
      res.status(200).json({ deleted: product });
    }
    return res.status(404).json({ error: "User not selected..." });
  } catch (error) {
    return res
      .status(404)
      .json({ error: "Error while deleting the data...!!" });
  }
}

// deleter for add to cart
export async function deleteCartItem(req, res) {
  try {
    const { productId } = req.query;
    if (productId) {
      const user = await BuyProduct.findByIdAndDelete(productId);
      res.status(200).json({ deleted: user });
    }
    return res.status(404).json({ error: "User not selected..." });
  } catch (error) {
    return res
      .status(404)
      .json({ error: "Error while deleting the data...!!" });
  }
}
