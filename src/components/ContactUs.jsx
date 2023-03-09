import React from "react";

function ContactUs() {
  return (
    <>
      <div name="contact" className="w-full my-32">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center">
            <h2 className="text-5xl font-bold">Contact Us</h2>
            <p className="text-3xl py-6 text-gray-500">
              Get in touch with us for all your digital needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-1 px-2 text-center">
            <div className="border py-8 rounded-xl shadow-xl">
              <p className="text-6xl font-bold text-indigo-600">
                test@email.com
              </p>
              <p className="text-gray-400 mt-2">Our Email Address</p>
            </div>
            <div className="border py-8 rounded-xl shadow-xl">
              <p className="text-6xl font-bold text-indigo-600">
                +91 9876235521
              </p>
              <p className="text-gray-400 mt-2">Our Phone Number</p>
            </div>
            {/* <div className="border py-8 rounded-xl shadow-xl">
              <p className="text-6xl font-bold text-indigo-600">100+</p>
              <p className="text-gray-400 mt-2">Transactions</p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
