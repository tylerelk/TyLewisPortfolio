import React, { useState } from "react";
import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/tech/github.svg";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  type: string;
  message: string;
}

const ContactForm = (): JSX.Element => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    type: "",
    message: "",
  });
  const emailData: Record<string, string> = {
    name: formData.name,
    email: formData.email,
    type: formData.type,
    message: formData.message,
  };
  const [status, setStatus] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Sending...");
    emailjs
      .send(
        "reply-from-portfolio",
        "default-template",
        emailData,
        "_A1tOovD7wByDfNk-"
      )
      .then(
        (response) => {
          console.log("Email sent successfully", response);
          setStatus("Email sent successfully!");
          setFormData({ name: "", email: "", type: "", message: "" });
        },
        (error) => {
          console.error("Error sending email: ", error);
          setStatus("Error sending email, please try again");
        }
      );
  };

  function renderSubmit() {
    switch (status) {
      case "Sending...":
        return <span className='text-2xl'>📤</span>; // Mailbox icon
      case "Email sent successfully!":
        return <span className='text-2xl'>👍</span>; // Checkmark icon
      case "Error sending email, please try again":
        return <span className='text-2xl'>❌</span>; // Error icon
      default:
        return <span className='text-2xl'>📧</span>; // Default icon (mailbox)
    }
  }

  return (
    <div>
      <p className='text-2xl'>Find me at one of these:</p>
      <div className='rounded-lg bg-white border-2 p-4 w-3/4 m-auto flex justify-center gap-4 items-center my-4'>
        <a
          href='https://www.linkedin.com/in/ty-lewis/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={linkedin} alt='LinkedIn' />
        </a>
        <a
          href='https://github.com/tylerelk'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={github} alt='GitHub' />
        </a>
      </div>
      <p className='text-2xl'>or send me your details and I'll reach out:</p>
      <form
        onSubmit={handleSubmit}
        className='rounded-lg bg-white border-2 p-4 w-3/4 m-auto flex flex-col gap-4 items-center my-4'
      >
        <label
          htmlFor='name'
          className='text-2xl self-start border-b-2 border-pink-500'
        >
          What's your name?
        </label>
        <input
          type='text'
          id='name'
          name='name'
          value={formData.name}
          onChange={handleChange}
          required
          className='bg-slate-200 w-3/4 text-xl p-2 focus:outline-teal-300 rounded-lg shadow'
        />
        <label
          htmlFor='email'
          className='text-2xl self-start border-b-2 border-pink-500'
        >
          Your email?
        </label>
        <input
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          required
          className='bg-slate-200 w-3/4 text-xl p-2 focus:outline-teal-300 rounded-lg shadow'
        />
        <label
          htmlFor='type'
          className='text-2xl self-start border-b-2 border-pink-500'
        >
          Who are you?
        </label>
        <select
          id='type'
          name='type'
          value={formData.type}
          onChange={handleChange}
          required
          className='bg-slate-200 w-3/4 text-xl p-2 focus:outline-teal-300 rounded-lg shadow'
        >
          <option value=''>Select type</option>
          <option value='Mentor'>Mentor</option>
          <option value='Partner'>Partner</option>
          <option value='HR'>Human Resources</option>
        </select>
        <label
          htmlFor='message'
          className='text-2xl self-start border-b-2 border-pink-500'
        >
          Say hi!
        </label>
        <textarea
          id='message'
          name='message'
          value={formData.message}
          onChange={handleChange}
          required
          className='bg-slate-200 w-3/4 text-xl p-2 focus:outline-teal-300 rounded-lg shadow'
          rows={4}
        />
        <button
          type='submit'
          disabled={isSubmitting}
          className={`w-3/4 py-2 text-xl rounded-xl bg-teal-300 shadow-lg flex items-center justify-center transition-transform duration-500 ${isSubmitting ? "animate-spin-3d" : ""}`}
        >
          {renderSubmit()}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
