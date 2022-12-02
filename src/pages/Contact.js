import React from 'react'
import { BsDashLg } from "react-icons/bs";

const Contact = () => {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto p-4">
        <div className="md:grid grid-cols-3 gap-6 text-center md:divide-x-2 p-8">
          <div className="p-3">
            <h4>MESSAGE US</h4>
            <h3>Start a chat!</h3>
          </div>
          <div className="p-3">
            <h4>MOBILE</h4>
            <h3>0798551778</h3>
          </div>
          <div className="p-3">
            <h4>Email</h4>
            <h3>info@hotel.com</h3>
          </div>
        </div>
      </section>

      <hr />

      <section className="container mx-auto p-4">
        <div className="text-center p-12">
          <h3><b>Let us hear from you directly!</b></h3>
          <h4>Our guests always travel the world in style. Mention @Kempinski on Instagram for a chance to be featured!</h4>
        </div>
        <div className="flex items-center justify-center">
          <div className="md:flex items-center">
            <main className="w-full">
              <div className="p-6  space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-red-700"><BsDashLg/></span>
                  <h5><b>Address</b></h5>
                </div>
                <p>Plot-7, Road-02, Hotel Motel Zone, San Francisco Road, United States of America</p>
              </div>
              <div className="p-6 m-3 space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-red-700"><BsDashLg/></span>
                  <h5>Phone & WhatsApp Number</h5>
                </div>
                <p>0798551778</p>
              </div>
              <div className="p-6 m-3 space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-red-700"><BsDashLg/></span>
                  <h5>Email</h5>
                </div>
                <p>info@hotel.com</p>
              </div>
            </main>

            <main className="w-full p-8">
              <form className="block shadow-lg rounded-lg p-8"> 
                <div className="mb-4">
                  <input
                    type="text"
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Full name"
                    name="name" 
                    id="name" 
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Email Address"
                    name="email" 
                    id="email" 
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Phone number"
                    name="number" 
                    id="number"
                  />
                </div>
                <div className="mb-4">
                  <textarea 
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Phone number"
                    name="number" 
                    id="number"
                    cols="30" rows="10">                 
                  </textarea>
                </div>
                <div className="text-center pt-1 mb-12 pb-1">
                  <button
                    className="inline-block px-6 py-2.5 bg-[#C21010] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#e04444] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3"
                    type="submit"
                  > Send Message
                  </button>
                </div>
              </form>
            </main>
          </div>
        </div>
      </section>

    </main>
  )
}

export default Contact
