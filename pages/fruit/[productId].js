import {
  ArrowBack,
  ArrowBackIos,
  ArrowLeft,
  ArrowRight,
} from "@mui/icons-material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout.jsx";

const SingleFruit = () => {
  const [size, setSize] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  const { productId } = router.query;

  const [posts, setPosts] = useState({});
  //   const { image, name, price, des } = posts;
  console.log(posts);

  useEffect(() => {
    fetch(`http://localhost:3000/api/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <Layout>
      <div style={{ height: "76vh" }}>
        <div className="py-8 px-12 flex flex-col md:flex-row items-center">
          <div>
            <img src={posts.image} height={400} width={400} />
          </div>
          <div className="px-12">
            <h2 className="text-5xl font-bold">{posts.name}</h2>
            <p className="text-slate-500 font-bold my-6">
              {posts.des?.length > 100
                ? posts.des.slice(0, 100) + " . . ."
                : posts.des}
            </p>
            <p className="text-5xl font-bold">
              <span className="text-orange-600">$</span>
              {posts.price}
            </p>

            {/* Size Section */}
            <div className="flex items-center mt-6 mb-4 gap-8">
              <p className="text-3xl font-bold">
                Size <ArrowRight />{" "}
              </p>
              <div className="flex items-center gap-4">
                <p
                  onClick={() => setSize(0)}
                  className={`text-orange-600 px-6 py-2 rounded-full border-orange-600 border font-bold hover:bg-orange-600 hover:text-white hover:cursor-pointer ${
                    size === 0 ? "bg-orange-600 text-white" : ""
                  }`}
                >
                  Small
                </p>
                <p
                  onClick={() => setSize(1)}
                  className={`text-orange-600 px-6 py-2 rounded-full border-orange-600 border font-bold hover:bg-orange-600 hover:text-white hover:cursor-pointer ${
                    size === 1 ? "bg-orange-600 text-white" : ""
                  }`}
                >
                  Medium
                </p>
                <p
                  onClick={() => setSize(2)}
                  className={`text-orange-600 px-6 py-2 rounded-full border-orange-600 border font-bold hover:bg-orange-600 hover:text-white hover:cursor-pointer ${
                    size === 2 ? "bg-orange-600 text-white" : ""
                  }`}
                >
                  Large
                </p>
              </div>
            </div>

            {/* Quantity section */}
            <div className="flex py-3 gap-2 items-center">
              <h2 className="text-2xl font-bold">Quantity : </h2>
              <div className="flex items-center">
                <span
                  onClick={() => {
                    if (quantity > 1) setQuantity(quantity - 1);
                  }}
                >
                  <ArrowLeft className="text-6xl cursor-pointer" />
                </span>
                <span className="text-3xl">{quantity}</span>
                <span onClick={() => setQuantity(quantity + 1)}>
                  <ArrowRight className="text-6xl cursor-pointer" />
                </span>
              </div>
            </div>
            <button className="px-4 py-2 bg-orange-600 text-xl font-bold rounded-full text-white mt-2">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleFruit;