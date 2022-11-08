import Image from "next/image";
import css from "../styles/Hero.module.scss";
import HeroImage from "../assets/HeroImage.png";
import { MobileFriendly, PhoneEnabled } from "@mui/icons-material";

const Hero = () => {
  return (
    <div style={{ height: "", padding: "40px 0" }}>
      {/* Left Side */}
      <div>
        <div style={{ lineHeight: "35px" }}>
          <h1
            style={{
              fontSize: "3.5rem",
              fontWeight: "bold",
              letterSpacing: "10px",
            }}
          >
            Be The Fastest
          </h1>
          <h1
            style={{
              fontSize: "3.5rem",
              fontWeight: "bold",
              letterSpacing: "5px",
            }}
          >
            In Delivering
          </h1>
          <h1
            style={{
              fontSize: "3.5rem",
              fontWeight: "bold",
              letterSpacing: "3px",
            }}
          >
            Your <span style={{ color: "olivedrab" }}>Pizza</span>
          </h1>
        </div>
        <p
          style={{
            fontSize: "1.2rem",
            color: "GrayText",
            fontWeight: "bold",
            width: "600px",
            padding: "20px 0",
          }}
        >
          Our mission is to filling your tummy with delicous food with fast and
          free delivery
        </p>
        <button className={css.button}>Get Started</button>
      </div>

      {/* Right Side */}
      <div className={css.imageContainer} style={{}}>
        <Image
          src={HeroImage}
          alt="Hero Image"
          width={500}
          style={{
            position: "absolute",
            top: "20px",
            right: "40px",
            margin: "50px 0",
            // padding: "20px 0",
          }}
        />
        <div className={css.contactUs}>
          <span>Contact Us</span>
          <div className={css.contactIcon}>
            <PhoneEnabled className={css.icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
