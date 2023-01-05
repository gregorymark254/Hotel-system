import React from 'react'
import { BsDashLg } from "react-icons/bs";

const Checkout = () => {
  return (
    <main className="bg-[#ececec] min-h-screen">
      <div >
        <div className="md:flex justify-center">
          <div className="mt-12 p-8">
            <div className="flex items-center mb-4 space-x-4">
              <h2 className="text-red-700"><BsDashLg/></h2>
              <h3><b>Check Your Details</b></h3>
            </div>
            <div className="bg-white p-12 px-6 space-y-9">
              <h4><b>Name :</b></h4>

              <h4><b>Phone:</b></h4>

              <h4><b>Email:</b></h4>

              <h4><b>Address:</b></h4>
            </div>
          </div>
          <div className="mt-12 p-8">
            <div className="flex items-center mb-4 space-x-4">
              <h2 className="text-red-700"><BsDashLg/></h2>
              <h3><b>Payment Methods</b></h3>
            </div>
            
            <form className="bg-white p-12">
              <div className="md:flex ">
                <div className="mb-6 xl:w-96 p-2">
                  <label className="form-label inline-block mb-1 text-gray-700"><b>Payment Method:</b></label>
                  <select name="" id="" className="block w-full px-3 py-1.5 bg-white  border border-solid border-gray-400 focus:border-red-600 focus:outline-none">
                    <option value="">Select Method</option>
                    <option value="">M-Pesa</option>
                    <option value="">PayPal</option>
                    <option value="">SSLComerz</option>
                  </select>
                </div>
                <div className="p-2 mt-4">
                  <h4><b>Total Amount :</b></h4>
                  <h5>KSH. 5,844</h5>
                </div>
              </div>
              <button className="py-2 px-4 mt-4 rounded-md bg-red-700 text-white">Submit</button>
            </form>
              
            
          </div>
        </div>
      </div>
    </main>
  )
}

export default Checkout
