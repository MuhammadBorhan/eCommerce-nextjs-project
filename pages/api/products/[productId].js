import connectMongo from "../../../database/connect";
import {
  deleteProduct,
  getProduct,
  updateProduct,
} from "../../../database/controller";

export default async function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: "Error in the connection" })
  );

  const { method } = req;

  switch (method) {
    case "GET":
      getProduct(req, res);
      // res.status(200).json({ method, name: "get request" });
      break;
    case "PUT":
      updateProduct(req, res);
      // res.status(200).json({ method, name: "put request" });
      break;
    case "DELETE":
      deleteProduct(req, res);
      // res.status(200).json({ method, name: "delete request" });
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
