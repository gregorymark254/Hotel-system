import React from 'react'
import { Link } from 'react-router-dom'

const Book = () => {
  return (
    <main>
      <div className="bg-[#ececec]">
        <div className="container mx-auto p-4">
          <form className="px-6 p-4 ">
            <div className="md:flex items-center justify-center">
              <div className="md:flex ">
                <input 
                  type="date" 
                  className="px-14 py-9 border border-solid border-gray-300 rounded-l-md focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="CHECK IN"
                />
                <input 
                  type="date" 
                  className="px-14 py-9 border border-solid border-gray-300  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="CHECK OUT"
                />
              </div>
              <div className="">
                <input 
                  type="number" 
                  min="1"
                  className="block  px-3 py-3  border border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="ADULTS"
                />
                <input 
                  type="number" 
                  min="1"
                  className="block  px-3 py-3 border border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="CHILDREN"
                />
              </div>
              <button className="bg-red-700 text-slate-300 py-2.5 px-12 text-sm rounded-r-md">
                <p>Need help : <br/> 0798551778</p>
                <br />
                <p><b>Check Availbility</b></p>
              </button>

            </div>
          </form>
        </div>
      </div>

      <div className="container mx-auto p-4">
        <div className="md:flex mb-6 border border-black">
          <div className="w-full">
            <img height="300" width="400" src="https://hotel.bdtask-demo.com/xainhotel/application/modules/room_setting/assets/images/2021-02-24/b1.jpg" alt="" />
          </div>
          <div className="w-full">
            <h2>Twin Room</h2>
            <span>Non-refundable, Breakfast included</span>
            <p><b>2 Adults  Children</b></p>
            <p><b>450 Presidential</b></p>
            <div>
              <div className="md:space-x-1 space-y-1 md:space-y-0 mb-4">
                <a className="inline-block px-6 py-2.5 bg-[#ececec] text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                  Link with href
                </a>
                <a className="inline-block px-6 py-2.5 bg-[#ececec] text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="collapse" href="#collapse" role="button" aria-expanded="false" aria-controls="collapseExample">
                  Link with href
                </a>
              </div>
              <div className="collapse" id="collapseExample">
                <span className="block p-6 rounded-lg shadow-lg bg-white">
                  Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                </span>
              </div>
              <div className="collapse" id="collapse">
                <span className="block p-6 rounded-lg shadow-lg bg-white">
                  Some placeholder content for the collapsent trigger.
                </span>
              </div>
            </div>
          </div>
          <div className="w-full space-y-4 text-right">
            <span>KSH.2,000/night</span>
            <p>Free Cancelation</p>
            <p><Link className="py-2 px-5 rounded-lg text-white bg-red-700" to="/room-details">Select</Link></p>
          </div>
        </div>

        <div className="md:flex mb-6 border border-black">
          <div className="w-full">
            <img height="300" width="400" src="https://hotel.bdtask-demo.com/xainhotel/application/modules/room_setting/assets/images/2021-02-24/b.jpg" alt="" />
          </div>
          <div className="w-full">
            <h2>Single Room</h2>
            <span>Full payment</span>
            <p><b>1 Adults  Children</b></p>
            <p><b>350  signa seroa</b></p>
            <div>
              <div className="md:space-x-1 space-y-1 md:space-y-0 mb-4">
                <a className="inline-block px-6 py-2.5 bg-[#ececec] text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                  Details
                </a>
                <a className="inline-block px-6 py-2.5 bg-[#ececec] text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="collapse" href="#collapse" role="button" aria-expanded="false" aria-controls="collapseExample">
                  Reserve Condition
                </a>
              </div>
              <div className="collapse" id="collapseExample">
                <span className="block p-6 rounded-lg shadow-lg bg-white">Included services</span>
              </div>
              <div className="collapse" id="collapse">
                <span className="block p-6 rounded-lg shadow-lg bg-white">
                  For cancellations made up to 4 days before the date of arrival, no additional fee will be charged. For cancellations within 3 days prior to arrival, 100% of the total booking will be charged. Full payment will be made directly at the accommodation. A credit card is required to make a reservation. In order to verify that the credit card is valid, 
                  a temporary hold of 0.11 € is placed on the card.
                </span>
              </div>
            </div>
          </div>
          <div className="w-full space-y-4 text-right">
            <span>KSH.1,600/night</span>
            <p>Free Cancelation</p>
            <p><Link className="py-2 px-5 rounded-lg text-white bg-red-700" to="/room-details">Select</Link></p>
          </div>
        </div>


      </div>
    </main>
  )
}

export default Book
