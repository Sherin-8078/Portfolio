import React from 'react'
import Swal from 'sweetalert2'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
const Contact = () => {
   const onSubmit = async (event) => {
  event.preventDefault();

  Swal.fire({
    title: "Sending...",
    text: "Please wait while we send your message",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  const formData = new FormData(event.target);
  formData.append("access_key", "37077a69-a178-435e-9b7f-f83423ef20e7");

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "Thank you for contacting me. I’ll get back to you soon.",
        confirmButtonColor: "#a855f7", 
      });

      event.target.reset(); 
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Something went wrong. Please try again.",
        confirmButtonColor: "#ec4899", 
      });
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Network Error",
      text: "Please check your internet connection.",
      confirmButtonColor: "#ec4899",
    });
  }
};

  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center mb-6'>
      <h1 className="text-5xl font-bold text-white md:mb-18">Contact</h1>
      <div
  className="
    flex-1
    bg-gray-900
    border border-gray-700
    rounded-2xl shadow-lg p-8 transition-all
    max-h-130 mt-10
  "
>
  <h2
    className="
      text-2xl font-semibold mb-6
      bg-gradient-to-r from-violet-400 to-fuchsia-500
      bg-clip-text text-transparent
    "
  >
    Send Us a Message
  </h2>

  <form onSubmit={onSubmit} className="flex flex-col gap-4 ">
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input
        type="text"
        placeholder="Name"
        name='name'
        className="
          w-full
        border border-gray-600
        bg-gray-800 text-gray-100
        rounded-lg px-3 py-2
        focus:ring-2 focus:ring-violet-400 outline-none
        "
        required
      />
    </div>
    <input
      type="email"
      placeholder="Email"
    name='email'
      className="
        border border-gray-600
        bg-gray-800 text-gray-100
        rounded-lg px-3 py-2
        focus:ring-2 focus:ring-violet-400 outline-none
      "
      required
    />
    <textarea
      rows="5"
      placeholder="Enter your message here..."
      name='message'
      className="
        border border-gray-600
        bg-gray-800 text-gray-100
        rounded-lg px-3 py-2
        focus:ring-2 focus:ring-violet-400 outline-none
      "
      required
    ></textarea>
    <button
      type="submit"
      className="
        mt-3 w-fit px-6 py-2 text-white font-semibold rounded-lg
        bg-gradient-to-r from-violet-500 to-fuchsia-600
        shadow-md hover:opacity-90 hover:scale-[1.02] transition-all
      "
    >
      Send Message
    </button>
  </form>
</div>
    <div className="flex justify-center gap-6 mt-6">
        <a href="https://www.linkedin.com/in/sherin-shibu-70228927b" target="_blank" rel="noopener noreferrer">
            <div className=" hover:-translate-y-1 transition duration-300 rounded-lg shadow shadow-black/10 max-w-80">
                <FaLinkedin className='text-blue-400 text-5xl'/>
            </div>
        </a>
        <a href="https://github.com/Sherin-8078" target="_blank" rel="noopener noreferrer">
            <div className=" hover:-translate-y-1 transition duration-300 rounded-lg shadow shadow-black/10 max-w-80">
                <FaGithub className='text-white text-5xl'/>
            </div>
        </a>
        <a href="mailto:sherinsubukollaka@gmail.com" >
            <div className=" hover:-translate-y-1 transition duration-300 rounded-lg shadow shadow-black/10 max-w-80">
            <MdMarkEmailUnread className='text-red-500 text-5xl'/>
        </div>
        </a>
        <a href="tel:+8078828121" target="_blank" >
            <div className=" hover:-translate-y-1 transition duration-300 rounded-lg shadow shadow-black/10 max-w-80">
            <FaPhoneSquareAlt className='text-green-500 text-5xl '/>
        </div>
        </a>
    </div>

    </div>
  )
}

export default Contact
