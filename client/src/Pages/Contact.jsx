import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_emailJsServiceID,
        import.meta.env.VITE_emailsTemplateID,
        form.current,
        import.meta.env.VITE_emailjsPublicKey
      )
      .then(
        () => {
          toast.success("Message sent successfully");
          navigate("/");
        },
        (error) => {
          toast.error("Error: " + error.message);
        }
      );
  };
  return (
    <div className="min-h-screen flex flex-col gap-10 mb-20 items-center justify-center w-full">
      <Helmet>
        <title>Contact | Ahammad Abdullah</title>
      </Helmet>
      <h3 className="text-3xl text-secondary font-semibold mt-32 lg:mt-10">
        Contact Me
      </h3>
      <form
        onSubmit={sendEmail}
        ref={form}
        className="xl:w-1/2 w-[80%] flex flex-col items-center gap-5 z-30"
      >
        <input
          className="outline-none bg-primary rounded-lg w-[80%] text-white border-secondary border-2 p-2"
          placeholder="Your Name"
          type="text"
          name="name"
          required
        />
        <input
          className="outline-none bg-primary rounded-lg w-[80%] text-white border-secondary border-2 p-2"
          placeholder="Your Email"
          type="email"
          name="email"
          required
        />
        <textarea
          placeholder="Write your message here..."
          className="outline-none bg-primary rounded-lg w-[80%] text-white border-secondary border-2 p-2"
          name="description"
          cols="30"
          rows="10"
          required
        ></textarea>
        <input
          className="py-2 rounded-lg px-3 bg-highlight text-white hover:bg-secondary"
          type="submit"
          value="Send Message"
        />
      </form>
    </div>
  );
};

export default Contact;
