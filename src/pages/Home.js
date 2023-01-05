import React from 'react'
import 'tw-elements';
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main>
      <div className="relative overflow-hidden hero">
        <div id="carouselExampleCrossfade" className="carousel slide carousel-fade relative" data-bs-ride="carousel">
          <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
            <button
              type="button"
              data-bs-target="#carouselExampleCrossfade"
              data-bs-slide-to="0"
              className="active "
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCrossfade"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCrossfade"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner relative w-full overflow-hidden">
            <div className="carousel-item active float-left w-full">
              <img
                src="https://hotel.bdtask-demo.com/xainhotel/assets/img/banner/2020-02-26/b.jpg"
                className="block w-full"
                height="1920px"
                width="1000px"
                alt="Wild Landscape"
              />
            </div>
            <div className="carousel-item float-left w-full">
              <img
                src="https://hotel.bdtask-demo.com/xainhotel/assets/img/banner/2019-05-27/s2.jpg"
                className="block w-full"
                height="1920px"
                width="1000px"
                alt="Camera"
              />
            </div>
            <div className="carousel-item float-left w-full">
              <img
                src="https://hotel.bdtask-demo.com/xainhotel/assets/img/banner/2019-05-27/s1.jpg"
                className="block w-full"
                height="1920px"
                width="1000px"
                alt="Exotic Fruits"
              />
            </div>
            <div className="carousel-caption hidden md:block top-36 absolute text-center">
              <p><b>BEYOND IMAGINABLE</b></p>
              <h1 className="text-xl font-bold">Enjoy </h1>
              <h1 className="text-xl font-bold">Your Vacation </h1>
              <h1 className="text-xl font-bold">With Us</h1>
              <p><b>It is a long established fact that a reader will be distracted by the <br /> readable content of a page when looking at its layout.</b></p>
            </div>
          </div>
          <button
            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      

      <div className="container mx-auto px-6  xl:px-52 absolute -mt-12">
        <form className="block bg-white p-4 rounded-lg ">
          <div className="md:flex items-center justify-center  ">
            <div className="md:flex items-center justify-center">
              <input 
                type="date" 
                className="form-control block px-3 py-6 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="CHECK IN"
              />
              <input 
                type="date" 
                className="form-control block  px-3 py-6 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="CHECK OUT"
              />
            </div>
            <div className="">
              <input 
                type="number" 
                min="1"
                className="form-control block  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="ADULTS"
              />
              <input 
                type="number" 
                min="1"
                className="form-control block  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="CHILDREN"
              />
            </div>
            <div className="flex items-center justify-center">
              <img className="h-20" src="https://hotel.bdtask-demo.com/xainhotel/website_assets/img/small-vertical.svg" alt="" />
              <button className="bg-red-700 text-slate-300 p-1 text-sm rounded">
                <p>Need help : <br/> 0798551778</p>
                <br />
                <p >Check Availbility</p>
              </button>
            </div>
          </div>
        </form>
      </div>


      <div className="bg-[#ececec]">
        <div className="container mx-auto p-4">
          <div className="md:grid grid-cols-4 gap-4 mt-28 mb-20">
            <div>
              <div className="flex items-center justify-center ">
                <img className="bg-[#f1e0e0] p-6 rounded-lg" src="https://hotel.bdtask-demo.com/xainhotel/assets/img/banner/2021-11-18/p1.png" alt="" />
              </div>
              <div className="text-center p-4">
                <h4><b>Save up to 10%</b></h4>
                <p>Members get access to an exclusive discounts on Radissonblu.com. Not a member yet? Hurry Up!</p>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center ">
                <img className="bg-[#f1e0e0] p-6 rounded-lg" src="https://hotel.bdtask-demo.com/xainhotel/assets/img/banner/2021-01-12/t.png" alt="" />
              </div>
              <div className="text-center p-4">
                <h4><b>Best Rate Guarantee</b></h4>
                <p>If you find a lower online rate, we will match it and give you an additional 25% off on your stay.</p>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center ">
                <img className="bg-[#f1e0e0] p-6 rounded-lg" src="https://hotel.bdtask-demo.com/xainhotel/assets/img/banner/2021-01-12/w.png" alt="" />
              </div>
              <div className="text-center p-4">
                <h4><b>Free Wi-Fi</b></h4>
                <p>If you find a lower online rate, we will match it and give you an additional 25% off on your stay.</p>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center ">
                <img className="bg-[#f1e0e0] p-6 rounded-lg" src="https://hotel.bdtask-demo.com/xainhotel/assets/img/banner/2021-01-12/m.png" alt="" />
              </div>
              <div className="text-center p-4">
                <h4><b>Enjoy Free Nights</b></h4>
                <p>If you find a lower online rate, we will match it and give you an additional 25% off on your stay.</p>
              </div>
            </div>
          </div>         
        </div>
      </div>

      <div className="container mx-auto p-4 mt-6 ">
        <div className="md:flex">
          <div className="w-full p-6">
            <img className="rounded-lg " width="500" src="https://hotel.bdtask-demo.com/xainhotel/assets/img/banner/2021-11-18/a.jpg" alt="images" />
          </div>
          <div className=" p-6 mt-10 space-y-6">
            <button className="border border-red-600 px-1 rounded-lg bg-red-100 text-red-700">About</button>
            <h2 className="text-red-700"><b>Comfort are Perfectly Combined Here</b></h2>
            <p>This charming private 19th-century mansion, which originally belonged to the family, has been completely renovated with care &amp; passion while respecting the spirit of place.
              Divo Hotel surrounded herself by a team of French artisans to create a sophisticated place in a refined.
            </p>
          <button className="bg-red-700 px-4 py-3 text-white rounded-lg">We provide</button>
          </div>
        </div>

        <div className="md:flex items-center justify-center p-12 rounded-lg my-10 bg-red-700 text-white">
          <div className="space-y-6">
            <h1>This charming private 19th century mansion, which originally</h1>
            <div className="md:flex items-center justify-center space-x-4">
              <Link to="/login" className="border border-white py-2 px-5 rounded-lg hover:text-black">Sign In</Link>
              <Link to="/register" className="bg-white text-black py-2 px-5 rounded-lg hover:text-red-700">Join us</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#ececec] p-8 ">
        <div className="text-center p-16 space-y-4">
          <h2><b>This Week's Top Offers</b></h2>
          <p>A resort is a self-contained destination that can provide for all of your travel needs in one location.</p>
        </div>
        <div className="md:grid grid-cols-4 gap-6">
          <div className="flex justify-center mb-6">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img className="rounded-t-lg" src="https://hotel.bdtask-demo.com/xainhotel/assets/img/banner/2021-02-01/s.jpg" alt=""/>
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                <p className="text-gray-700 text-base mb-4">
                  Some quick example text to build on the card title and make up the bulk of the card's
                  content.
                </p>
              </div>
            </div>
          </div>          
          <div className="flex justify-center mb-6">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img className="rounded-t-lg" src="https://hotel.bdtask-demo.com/xainhotel/assets/img/banner/2019-06-15/o1.jpg" alt=""/>
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                <p className="text-gray-700 text-base mb-4">
                  Some quick example text to build on the card title and make up the bulk of the card's
                  content.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mb-6">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img className="rounded-t-lg" src="https://hotel.bdtask-demo.com/xainhotel/assets/img/banner/2019-06-15/o2.jpg" alt=""/>
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                <p className="text-gray-700 text-base mb-4">
                  Some quick example text to build on the card title and make up the bulk of the card's
                  content.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mb-6">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img className="rounded-t-lg" src="https://hotel.bdtask-demo.com/xainhotel/assets/img/banner/2019-06-15/o3.jpg" alt=""/>
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                <p className="text-gray-700 text-base mb-4">
                  Some quick example text to build on the card title and make up the bulk of the card's
                  content.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mb-6">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img className="rounded-t-lg" src="https://hotel.bdtask-demo.com/xainhotel/assets/img/banner/2019-06-15/o4.jpg" alt=""/>
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                <p className="text-gray-700 text-base mb-4">
                  Some quick example text to build on the card title and make up the bulk of the card's
                  content.
                </p>
              </div>
            </div>
          </div><div className="flex justify-center mb-6">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img className="rounded-t-lg" src="https://hotel.bdtask-demo.com/xainhotel/assets/img/banner/2019-06-15/o5.jpg" alt=""/>
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                <p className="text-gray-700 text-base mb-4">
                  Some quick example text to build on the card title and make up the bulk of the card's
                  content.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mb-6">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img className="rounded-t-lg" src="https://hotel.bdtask-demo.com/xainhotel/assets/img/banner/2021-02-22/b4.jpg" alt=""/>
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                <p className="text-gray-700 text-base mb-4">
                  Some quick example text to build on the card title and make up the bulk of the card's
                  content.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mb-6">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img className="rounded-t-lg" src="https://hotel.bdtask-demo.com/xainhotel/assets/img/banner/2021-02-22/h2.jpg" alt=""/>
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                <p className="text-gray-700 text-base mb-4">
                  Some quick example text to build on the card title and make up the bulk of the card's
                  content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </main>
  )
}

export default Home