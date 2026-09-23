import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { Button } from "./ui/button";
import emailjs from "@emailjs/browser";
import { motion } from "motion/react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    const NewError = {};
    if (!name.trim()) {
      NewError.name = "Name is required";
    }
    if (!email.trim()) {
      NewError.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      NewError.email = "plase enter a valid email";
    }
    if (!message.trim()) {
      NewError.message = "Message is required";
    }
    if (Object.keys(NewError).length > 0) {
      setError(NewError);
      return;
    }

    const FormData = {
      name,
      email,
      message,
    };
    // console.log(FormData);
    const templateParams = {
      name: FormData.name,
      email: FormData.email,
      message: FormData.message,
    };
    // console.log(templateParams);
    try {
      await emailjs.send(
        "service_skqht23",
        "template_q0sq2g8",
        templateParams,
        "uMolHjSu78CZl9W7x",
      );

      console.log("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
    }

    setSuccess("your Message has been sent successfully!");
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        {/* Heading */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Contact
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Get In Touch
          </h2>

          <p className="mt-4 text-muted-foreground">
            Have a project in mind? Feel free to contact me.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          className="mx-auto mt-12 max-w-2xl space-y-6"
          onSubmit={handleSubmit}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {/* Name */}
          <motion.div
            className="space-y-2"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <Label htmlFor="name">Name</Label>

            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              // onChange={(e) => setName(e.target.value)}
              onChange={(e) => {
                setName(e.target.value);
                if (error.name) {
                  setError((prev) => ({
                    ...prev,
                    name: "",
                  }));
                }
              }}
            />
            {error.name && <p className="text-red-500">{error.name}</p>}
          </motion.div>

          {/* Email */}
          <motion.div
            className="space-y-2"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              // onChange={(e) => setEmail(e.target.value)}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error.email) {
                  setError((prev) => ({
                    ...prev,
                    email: "",
                  }));
                }
              }}
            />
            {error.email && <p className="text-red-500">{error.email}</p>}
          </motion.div>

          {/* Message */}
          <motion.div
            className="space-y-2"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Write your message..."
              value={message}
              // onChange={(e) => setMessage(e.target.value)}
              onChange={(e) => {
                setMessage(e.target.value);
                if (error.message) {
                  setError((prev) => ({
                    ...prev,
                    message: "",
                  }));
                }
              }}
            />
            {error.message && <p className="text-red-500">{error.message}</p>}
          </motion.div>

          {/* Button */}
          {/* <Button type="submit" className="w-full">
            Send Message
          </Button> */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </motion.div>
        </motion.form>
        {success && <p className="mt-4 text-muted-foreground">{success}</p>}
      </div>
    </section>
  );
};

export default Contact;
