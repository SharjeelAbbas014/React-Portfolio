import { init, emailjs } from "emailjs-com";
init("user_UrriQcJ1o4aZCVouJqvui");
var templateParams = {
  name: "James",
  notes: "Check this out!",
};
emailjs.send("service_2imb7a6", , templateParams, userID).then(
  () => {
    console.log("SENT");
  },
  (err) => {
    console.log(err);
  }
);
