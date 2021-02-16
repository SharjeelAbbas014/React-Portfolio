import "./ChatNow.css";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import emailjs from "emailjs-com";

const ChatNow = ({ turnOff }) => {
  let [res, setRes] = useState(false);
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2imb7a6",
        "template_z1xdalr",
        e.target,
        "user_UrriQcJ1o4aZCVouJqvui"
      )
      .then(
        (result) => {
          console.log(result.text);
          setRes(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <div
      id="chatBack"
      onClick={() => {
        setRes(false);
        turnOff();
      }}
    >
      <div id="chatNow" onClick={(e) => e.stopPropagation()}>
        <span onClick={() => turnOff()}>
          <AiOutlineCloseCircle />
        </span>
        <h1>Chat Now!</h1>
        <h2>Just leave a message and I'll get to you as soon as possible</h2>
        {res === true ? <p>Message Sent!</p> : null}
        <div>
          <form onSubmit={sendEmail}>
            <input
              type="email"
              name="user_email"
              placeholder="Enter Your Email"
            />
            <input type="text" name="from_name" placeholder="Enter Your Name" />
            <input
              type="text"
              name="user_company"
              placeholder="Enter Your Company Name"
            />
            <textarea
              name="message"
              placeholder="Enter Your Message"
            ></textarea>
            <input type="submit" id="sendChatButton" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
};
export default ChatNow;
