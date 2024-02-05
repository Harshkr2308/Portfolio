import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

import "./style.css";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/19Jb-CCyz9RGWKz2yTNzjPdYIlAi4_qcK/view?usp=drive_link";
    link.setAttribute("download", "HarshKumar.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Harsh Kumar
          <br />
          Full-Stack Mern developer <br />
          and Competitive Programmer
        </h1>
      </div>
{/* 
      <img
        src="https://res.cloudinary.com/dko27pkev/image/upload/v1706880431/pic_i905qg.jpg"
        alt="Profile"
        className="bg"
      /> */}

      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigateToContactMePage}>Hire Me</button>
          <button onClick={downloadResume}>Resume</button>
        </div>
        <div className="home__social-icons">
          <a href={"https://github.com/Harshkr2308"} className="icons">
            <FaGithub size={30} />
          </a>
          <a
            href={"https://www.linkedin.com/in/harsh-kumar-60134221b/"}
            className="icons"
          >
            <FaLinkedin size={30} />
          </a>
          <a href={"https://www.facebook.com/profile.php?id=100005611178390&mibextid=ZbWKwL"} className="icons">
            <FaFacebook size={30} />
          </a>
          <a href={"https://wa.me/918434563791"} className="icons">
            <IoLogoWhatsapp size={30} />
          </a>
        </div>
      </Animate>
    </section>
  );
};
export default Home;
