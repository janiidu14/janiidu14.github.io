'use client';

import { React, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // Form validation state
  const [errors, setErrors] = useState({});

  // Setting button text on form submission
  const [buttonText, setButtonText] = useState("Send Message");

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  // Handling form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/send", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send Message");
        toast.error("Message sending failed.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        return;
      } else {
        setShowSuccessMessage(true);
        setShowFailureMessage(false);
        setButtonText("Send Message");
        toast.success("Thank you! Your Message has been delivered.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        // Reset form fields
        setFullname("");
        setEmail("");
        setMessage("");
        setSubject("");

        setShowSuccessMessage("");
        return;
      }
    }
    console.log(fullname, email, subject, message);
  };

  return (
    <div className="container mb-10 lg:p-8 lg:grid lg:grid-cols-2">
      <div className="my-auto">
        <h2 className="text-xl m-8 font-bold text-slate-100 dark:text-teal-400 md:text-4xl">
          Lets Talk. <br /> Tell Me More About Your Project
        </h2>
      </div>

      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="rounded-lg shadow-xl flex flex-col px-8 text-gray-50   dark:bg-blue-500"
      >
        <h1 className="text-2xl font-bold dark:text-gray-50">Send a message</h1>

        <label
          htmlFor="fullname"
          className="text-gray-500 font-light mt-8 dark:text-gray-50"
        >
          Full name
          <span className="text-red-500 dark:text-gray-50">*</span>
        </label>
        <input
          type="text"
          name="text"
          autoComplete="off"
          value={fullname}
          onChange={(e) => {
            setFullname(e.target.value);
          }}
          className="bg-transparent focus:bg-transparent appearance-none border-b py-2 pl-2 focus:outline-none focus:rounded-md focus:ring-1 ring-purple-500 font-light text-white"
        />
        {errors?.fullname && (
          <p className="text-red-500">Fullname cannot be empty.</p>
        )}

        <label
          htmlFor="email"
          className="text-gray-500 font-light mt-4 dark:text-gray-50"
        >
          E-mail
          <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          autoComplete="new-password"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="bg-transparent border-b py-2 pl-2 focus:outline-none focus:rounded-md focus:ring-1 ring-purple-500 font-light text-white"
        />
        {errors?.email && (
          <p className="text-red-500">Email cannot be empty.</p>
        )}

        <label
          htmlFor="subject"
          className="text-gray-500 font-light mt-4 dark:text-gray-50"
        >
          Subject
          <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="subject"
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
          }}
          className="bg-transparent border-b py-2 pl-2 focus:outline-none focus:rounded-md focus:ring-1 ring-purple-500 font-light text-white"
        />
        {errors?.subject && (
          <p className="text-red-500">Subject cannot be empty.</p>
        )}

        <label
          htmlFor="message"
          className="text-gray-500 font-light mt-4 dark:text-gray-50"
        >
          Message
          <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          className="bg-transparent border-b py-2 pl-2 focus:outline-none focus:rounded-md focus:ring-1 ring-purple-500 font-light text-white"
        ></textarea>
        {errors?.message && (
          <p className="text-red-500">Message body cannot be empty.</p>
        )}

        <div className="flex flex-row items-center justify-start my-8">
          <button
            type="submit"
            className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white  "
          >
            <span className="relative font-bold px-5 py-2.5 inline-flex items-center transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
              {buttonText}
            </span>
          </button>
        </div>
      </form>
      {showSuccessMessage && (
        <p className="text-green-500 font-semibold text-sm my-2">
          Thank you! Your Message has been delivered.
        </p>
      )}
      {showFailureMessage && (
        <p className="text-red-500 font-semibold text-sm my-2">
          Message sending failed. Please try again.
        </p>
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        progress={undefined}
        theme="dark"
      />
    </div>
  );
}
