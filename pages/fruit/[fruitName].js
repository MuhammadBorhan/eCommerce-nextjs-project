import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout.jsx";

const SingleFruit = () => {
  const router = useRouter();
  const { fruitName } = router.query;
  console.log(fruitName);

  const [posts, setPosts] = useState({});
  console.log(posts);

  useEffect(() => {
    fetch(`http://localhost:3000/api/products/${fruitName}`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <Layout>
      <div className="h-screen">
        <h1>{posts.name}</h1>
        <img src={posts.image} />
      </div>
    </Layout>
  );
};

export default SingleFruit;
