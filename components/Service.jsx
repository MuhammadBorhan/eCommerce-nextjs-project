import css from "../styles/Service.module.scss";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import SingleService from "./SingleService";

const Service = () => {
  return (
    <div className="mt-[-30px]">
      <div
        style={{
          width: "400px",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <p
          style={{
            marginTop: "0",
            fontSize: "1.3rem",
            color: "orangered",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          What we serve
        </p>
        <h1 className="text-4xl font-bold font-sans">
          Your Favourite Food Delivery Partner
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 items-center">
        <SingleService p="This is Description This is Description" imgs={s3} />
        <SingleService p="This is Description This is Description" imgs={s1} />
        <SingleService p="This is Description This is Description" imgs={s2} />
      </div>
    </div>
  );
};

export default Service;
