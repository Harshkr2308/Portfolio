import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./style.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ri3e90k",
        "template_20jmhhz",
        form.current,
        "dBmVbCf8Ky-4QQfZB"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email send successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("error");
        }
      );
  };
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="contact__content__form">
            <form ref={form} onSubmit={sendEmail}>
              <div className="contact__content__form__controlswrapper">
                <div>
                  <input
                    required
                    name="user_name"
                    className="inputName"
                    type={"text"}
                  />
                  <label htmlFor="user_name" className="nameLabel">
                    Name
                  </label>
                </div>
                <div>
                  <input
                    required
                    name="user_email"
                    className="inputEmail"
                    type={"text"}
                  />
                  <label htmlFor="user_email" className="emailLabel">
                    Email
                  </label>
                </div>
                <div>
                  <textarea
                    required
                    name="message"
                    className="inputDescription"
                    type={"text"}
                    rows="5"
                  />
                  <label htmlFor="message" className="descriptionLabel">
                    Description
                  </label>
                </div>
              </div>
              <button>Submit</button>
            </form>
          </div>
        </Animate>
      </div>
    </section>
  );
};
export default Contact;
