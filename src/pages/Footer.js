import React from 'react'
import { BsDashLg } from "react-icons/bs";

const Footer = () => {
  return (
    <main className="bg-[#1B1A17] text-neutral-500">
      <section className="container mx-auto p-4">
        <div className="flex items-center justify-center text-center">
          <div className="space-y-6 p-5">
            <div>
              <h3 className="text-white">Get updates & exclusive offers</h3>
              <p>Sign up to our newsletter to be the first to hear aboutnew openings, offers and more.</p>
            </div>
            <div>
              <form action="">
                <div className="mb-4">
                  <input
                    type="email"
                    className="form-control block w-full px-3 py-4 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Email Address"
                    name="email" 
                    id="email" 
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <hr />

      <section className="container mx-auto p-4">
        <main className="md:flex justify-center items-center">
          <div className="space-y-3 p-6">
            <img src="https://hotel.bdtask-demo.com/xainhotel/assets/img/2021-11-18/F.png" alt="logo" />
            <p>Plot-7, Road-02, Hotel Motel Zone, Kisumu Beach Road,<br/> Kenya</p>
            <p>info@hotel.com</p>
          </div>
          <div className="md:grid grid-cols-3 gap-4">
            <div className="space-y-4 p-4">
              <div className="flex items-center space-x-2">
                <span className="text-red-700"><BsDashLg/></span>
                <h2 className="text-white">Pages</h2>
              </div>
              <div>
                <li><a className="hover:text-red-700" href="/">Home</a></li>
                <li><a className="hover:text-red-700" href="/about">About Us</a></li>
                <li><a className="hover:text-red-700" href="/contact">Contact Us</a></li>
                <li><a className="hover:text-red-700" href="/gallery">Gallery</a></li>
              </div>
            </div>
            <div className="space-y-4 p-4">
              <div className="flex items-center space-x-2">
                <span className="text-red-700"><BsDashLg/></span>
                <h3 className="text-white">Social Links</h3>
              </div>
              <div>
                <li><a className="hover:text-red-700" href="/">Instagram</a></li>
                <li><a className="hover:text-red-700" href="/about">Twitter</a></li>
                <li><a className="hover:text-red-700" href="/contact">FaceBook</a></li>
                <li><a className="hover:text-red-700" href="/gallery">What's App</a></li>
              </div>
            </div>
            <div className="space-y-4 p-4">
              <div className="flex items-center space-x-2">
                <span className="text-red-700"><BsDashLg/></span>
                <h3 className="text-white">Company Profile</h3>
              </div>
              <div>
                <li><a className="hover:text-red-700" href="#privacy">Privacy</a></li>
                <li><a className="hover:text-red-700" href="#terms">Terms & Condition</a></li>
              </div>
            </div>
          </div>
        </main>       
      </section>

      <hr />

      <section className="container mx-auto p-6">
        <h4 className="text-center">&copy; 2022 By Gregory Mark. All right reserved.</h4>
      </section>

    </main>
  )
}

export default Footer
