import Image from "next/image";
import css from "../styles/Hero.module.scss";
import FoodImage from "../assets/healthyFood.png";
import { PhoneEnabled } from "@mui/icons-material";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[90vh] flex items-center lg:bg-cover lg:bg-center lg:bg-no-repeat py-20 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-2">
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <p className="text-2xl md:text-3xl text-indigo-500 ">
              Hello, I'm Borhan
            </p>

            <h1 className="text-2xl mt-2 md:text-4xl font-bold">
              <span style={{ color: "orangered", fontWeight: "bold" }}>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={[
                    "Developer Borhan",
                    "MERN Stack Developer",
                    "ReactJS Developer",
                    "NextJS Developer",
                  ]}
                  loop={Infinity}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>

            <p className=" md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
              Skill of building application with Frontend and Backend
              operations.
            </p>

            <button className={`mt-12 md:mt-0 ${css.button}`}>
              <span>Contact Me</span>
              <PhoneEnabled className={css.icon} />
            </button>
          </div>

          <div className="hidden hero-profile lg:justify-center lg:ml-[300px] lg:flex flex-1 justify-end items-center h-full">
            <Image
              src={FoodImage}
              alt="Banner Image"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>

    // <div style={{ height: "", padding: "40px 0" }}>
    //   {/* Left Side */}
    //   <div>
    //     <div style={{ lineHeight: "35px" }}>
    //       <h1
    //         style={{
    //           fontSize: "3.5rem",
    //           fontWeight: "bold",
    //           letterSpacing: "10px",
    //         }}
    //       >
    //         Be The Fastest
    //       </h1>
    //       <h1
    //         style={{
    //           fontSize: "3.5rem",
    //           fontWeight: "bold",
    //           letterSpacing: "5px",
    //         }}
    //       >
    //         In Delivering
    //       </h1>
    //       <h1
    //         style={{
    //           fontSize: "3.5rem",
    //           fontWeight: "bold",
    //           letterSpacing: "3px",
    //         }}
    //       >
    //         Your <span style={{ color: "olivedrab" }}>Pizza</span>
    //       </h1>
    //     </div>
    //     <p
    //       style={{
    //         fontSize: "1.2rem",
    //         color: "GrayText",
    //         fontWeight: "bold",
    //         width: "600px",
    //         padding: "20px 0",
    //       }}
    //     >
    //       Our mission is to filling your tummy with delicous food with fast and
    //       free delivery
    //     </p>
    //     <button className={css.button}>Get Started</button>
    //   </div>

    //   {/* Right Side */}
    //   <div className={css.imageContainer} style={{}}>
    //     <Image
    //       src={HeroImage}
    //       alt="Hero Image"
    //       width={500}
    //       style={{
    //         position: "absolute",
    //         top: "20px",
    //         right: "40px",
    //         margin: "50px 0",
    //         // padding: "20px 0",
    //       }}
    //     />
    //     <div className={css.contactUs}>
    //       <span>Contact Us</span>
    //       <div className={css.contactIcon}>
    //         <PhoneEnabled className={css.icon} />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Hero;
