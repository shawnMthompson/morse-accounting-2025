"use client";

import NavBar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

export default function ContactPage() {
  return (
    <div>
      <NavBar />
      <PageHeader previousPage="Home" currentPage="Contact" />
      <main className="p-4">
        <h2 className="mt-10 flex justify-center items-center text-5xl">
          Contact Us
        </h2>
        <div className="md:p-12 p-5 flex flex-col md:flex-row">
          <div
            id="col-1"
            className="basis-1/2 flex flex-col justify-center items-center order-1"
          >
            <h3 className="text-2xl mb-5">Online Inquiry</h3>
            <form
              className="text-black space-y-4"
              onSubmit={(e) => {
                e.preventDefault(); // prevent default form submissions
                const form = e.target;
                if (form.checkValidity()) {
                  alert(
                    "Form submitted successfully... just kidding, this hasn't been implemented yet :D"
                  );
                } else {
                  alert("Please fill out all required fields correctly.");
                }
              }}
            >
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                placeholder="Name"
                required
              />
              <input
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Email"
                required
              />
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="Phone (e.g., 123-456-7890)"
              />
              <input
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Intent (e.g., Inquiry, Feedback)"
                required
              />
              <textarea
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Message"
                rows="4"
                required
              />
              <button
                type="submit"
                className="p-2 bg-blue-500 text-white rounded"
              >
                Submit
              </button>
            </form>
          </div>
          <div
            id="col-2"
            className="basis-1/2 flex flex-col items-center order-2"
          >
            <h3 className="text-2xl mb-5">Contact Details</h3>
            <p>XXXXXX@gmail.com</p>
            <p>XXX-XXX-XXXX</p>
            <h4 className="font-bold text-xl">Business Address</h4>
            <p>XXXXXXXXXXXXXXXXXXXXX</p>
          </div>
        </div>
      </main>
    </div>
  );
}
