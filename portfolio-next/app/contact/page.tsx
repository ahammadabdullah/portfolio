'use client'
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import {useRouter} from 'next/navigation';
import toast from "react-hot-toast";
import { MutableRefObject, LegacyRef } from "react";

const Contact = () => {
    const router = useRouter();
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        emailjs
            .sendForm(
            process.env.emailJsServiceID || "",
            process.env.emailsTemplateID || "",
            form.current!,
            process.env.emailjsPublicKey || ""
            )
            .then(
            () => {
                toast.success("Message sent successfully");
                router.push("/");
            },
            (error) => {
                toast.error("Error: " + error.message);
            }
            );
    };

    const form: MutableRefObject<HTMLFormElement | null> = useRef(null);

    return (
        <div className="min-h-screen flex flex-col gap-10 mb-20 items-center justify-center w-full">
            <h3 className="text-3xl text-secondary font-semibold mt-32 lg:mt-10">
                Contact Me
            </h3>
            <form onSubmit={sendEmail} ref={form}  className="xl:w-1/2 w-[80%] flex flex-col items-center gap-5 z-30">
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
          cols={30}
          rows={10}
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
