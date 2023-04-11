import React from 'react'
import { BsDashLg } from "react-icons/bs";


const roomDetails = () => {
  return (
    <main>
      <div className="container mx-auto p-4">
        <div className="text-center text-white bg-[#10A19D] mt-8 mb-4 p-4 rounded-md">
            <h4>Awesome choice! You're getting a great deal with your rate.</h4>
        </div>
        <div className="md:flex mb-4">
            <section className="p-4">
                <div className="border border-slate-200 mb-4 p-4">
                    <div className="mb-2 p-4">
                        <span>Check In</span>
                        <h4><b>date</b></h4>
                        <p> Until:</p>
                    </div>
                    <div className="mb-2 p-4">
                        <span>Check Out</span>
                        <h4><b>date</b></h4>
                        <p>Until : </p>
                    </div>
                    <div className="space-y-3 divide-y-2 p-4">
                        <h4>Twin Room : 58588</h4>
                        <h4>Adults: 1</h4>
                        <h4>Room size: 1</h4>
                        <h4>NO. of Room: 1</h4>
                        <h3>Total Price : 885588</h3>
                    </div>
                </div>
                <div className="flex border border-slate-200 mb-3 p-4 space-x-3">
                    <div>
                        <img src="https://hotel.bdtask-demo.com/xainhotel/assets/img/banner/2021-01-11/h.png" alt="" />
                    </div>
                    <div>
                        <h3>It's almost yours</h3>
                        <p>We just need a few more details to confirm your booking at The Radisson Hotel.</p>
                    </div>
                </div>
                <div className="flex border border-slate-200 mb-3 p-4 space-x-3">
                    <div>
                        <img src="https://hotel.bdtask-demo.com/xainhotel/assets/img/banner/2021-01-11/b.png" alt="" />
                    </div>
                    <div>
                        <h3>No surprises</h3>
                        <p>Pay the price you see – no booking fees!</p>
                    </div>
                </div>
                <div className="flex border border-slate-200 mb-3 p-4 space-x-3">
                    <div>
                        <img src="https://hotel.bdtask-demo.com/xainhotel/assets/img/banner/2021-01-11/s.png" alt="" />
                    </div>
                    <div>
                        <h3>Your booking is secure</h3>
                        <p>Your details are protected by a secure connection.</p>
                    </div>
                </div>
            </section>
            <section className="p-4">
                <div className="flex items-center mb-2 space-x-3">
                    <p className="text-red-700"><BsDashLg/></p>
                    <h1><b>Enter Your Details</b></h1>
                </div>
                <div>
                    <form action="/checkout">
                        <div className="md:flex justify-center">
                            <div className="mb-3 xl:w-96 p-2">
                                <label className="form-label inline-block mb-1 text-gray-700"> First Name</label>
                                <input
                                    type="text"
                                    className="block w-full px-3 py-1.5 bg-white  border border-solid border-gray-400   focus:border-red-600 focus:outline-none "
                                    required
                                />
                            </div>
                            <div className="mb-3 xl:w-96 p-2">
                                <label className="form-label inline-block mb-1 text-gray-700"> Last Name</label>
                                <input
                                    type="text"
                                    className="block w-full px-3 py-1.5 bg-white  border border-solid border-gray-400   focus:border-red-600 focus:outline-none "
                                    required
                                />
                            </div>
                        </div>
                        <div className="md:flex justify-center">
                            <div className="mb-3 xl:w-96 p-2">
                                <label className="form-label inline-block mb-1 text-gray-700">Email</label>
                                <input
                                    type="email"
                                    className="block w-full px-3 py-1.5 bg-white  border border-solid border-gray-400   focus:border-red-600 focus:outline-none "
                                    required
                                />
                            </div>
                            <div className="mb-3 xl:w-96 p-2">
                                <label className="form-label inline-block mb-1 text-gray-700">Phone</label>
                                <input
                                    type="number"
                                    className="block w-full px-3 py-1.5 bg-white  border border-solid border-gray-400   focus:border-red-600 focus:outline-none "
                                    required
                                    min="0"
                                />
                            </div>
                        </div>
                        <div className="mb-3 xl:w-96 p-2">
                            <label className="form-label inline-block mb-1 text-gray-700">Address</label>
                            <input
                                type="text"
                                className="block w-full px-3 py-1.5 bg-white  border border-solid border-gray-400   focus:border-red-600 focus:outline-none "
                                required
                            />
                        </div>
                        <div className="mb-3 w-full p-2">
                            <label className="form-label inline-block mb-1 text-gray-700">Room</label>
                            <input
                                type="text"
                                className="block w-full px-3 py-1.5 bg-white  border border-solid border-gray-400   focus:border-red-600 focus:outline-none "
                                required
                            />
                        </div>
                        <div className="mb-3 xl:w-96 p-2">
                            <label className="form-label inline-block mb-1 text-gray-700">Full Guest Name</label>
                            <input
                                type="text"
                                className="block w-full px-3 py-1.5 bg-white  border border-solid border-gray-400   focus:border-red-600 focus:outline-none "
                                required
                            />
                        </div>
                        <div className="mb-3 w-full p-2">
                            <label className="form-label inline-block mb-1 text-gray-700">Special Requests</label> <br />
                            <label className="form-label inline-block mb-1 text-gray-700">Please write requests in English or the property's language</label>
                            <textarea 
                                name="" id="" cols="10" rows="5"
                                className="block w-full px-3 py-1.5 bg-white  border border-solid border-gray-400   focus:border-red-600 focus:outline-none "
                            ></textarea>
                        </div>
                        <button className="px-4 py-2 rounded-lg text-white bg-red-600 p-2">Next:Final Details</button>
                    </form>
                </div>
            </section>
        </div>
      </div>
    </main>
  )
}

export default roomDetails
