import React from 'react'

const About = () => {
  return (
    <main>
      <div className="container mx-auto p-4">
        <div className="text-center p-6 my-10 space-y-3">
          <h1 className="text-6xl"><b>Small team. Big hearts.</b></h1>
          <h4 className="text-xl text-slate-400">Our focus is always on finding the best people to work with. Our bar is high, And you look ready to take on the challenge.</h4>
        </div>
        <section className="overflow-hidden text-gray-700">
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap w-1/2">
              <div className="w-1/2 p-1 ">
                <img alt="gallery" className="block object-cover object-center  rounded-lg"
                  src="https://hotel.bdtask-demo.com/xainhotel/assets/img/banner/2019-06-15/p1.jpg"/>
              </div>
              <div className="w-1/2 p-1 ">
                <img alt="gallery" className="block object-cover object-center  rounded-lg"
                  src="https://hotel.bdtask-demo.com/xainhotel/assets/img/banner/2019-06-15/p2.jpg"/>
              </div>
              <div className=" p-1">
                <img alt="gallery" className="block object-cover object-center  rounded-lg"
                  src="https://hotel.bdtask-demo.com/xainhotel/assets/img/banner/2019-06-15/p5.jpg"/>
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className=" p-1">
                <img alt="gallery" className="block object-cover object-center  rounded-lg"
                  src="https://hotel.bdtask-demo.com/xainhotel/assets/img/banner/2019-06-15/p5.jpg"/>
              </div>
              <div className="w-1/2 p-1">
                <img alt="gallery" className="block object-cover object-center rounded-lg"
                  src="https://hotel.bdtask-demo.com/xainhotel/assets/img/banner/2019-06-15/p3.jpg"/>
              </div>
              <div className="w-1/2 p-1">
                <img alt="gallery" className="block object-cover object-center  rounded-lg"
                  src="https://hotel.bdtask-demo.com/xainhotel/assets/img/banner/2019-06-15/p4.jpg"/>
              </div>
            </div>
          </div>
        </section>

        <div className="md:grid grid-cols-4 gap-4 p-8 m-8 text-center">
          <div className="m-4">
            <h1 className="text-red-700">655</h1>
            <h4>Monthly Active Users</h4>
          </div>
          <div className="m-4">
            <h1 className="text-red-700">3131</h1>
            <h4>Team Members</h4>
          </div>
          <div className="m-4">
            <h1 className="text-red-700">5000</h1>
            <h4>User Projects Published</h4>
          </div>
          <div className="m-4">
            <h1 className="text-red-700">5531</h1>
            <h4>Server Uptime</h4>
          </div>
        </div>

        <div className="md:flex items-center justify-center text-center mb-6">
          <div className="space-y-8">
            <div>
              <h2><b>Trusted by thousands of companies</b></h2>
              <br />
              <span>Our guests always travel the world in style. Mention @Kempinski on Instagram for a chance to be featured!</span>
            </div>
            <div className="md:grid grid-cols-6 gap-20 mb-4">
              <img className="md:p-6" src="https://hotel.bdtask-demo.com/xainhotel/assets/img/banner/2021-11-18/i.jpg" alt="" />
              <img className="md:p-4" src="https://hotel.bdtask-demo.com/xainhotel/assets/img/banner/2021-01-11/a1.svg" alt="" />
              <img className="md:p-4" src="https://hotel.bdtask-demo.com/xainhotel/assets/img/banner/2021-01-11/f.svg" alt="" />
              <img className="md:p-4" src="https://hotel.bdtask-demo.com/xainhotel/assets/img/banner/2021-01-11/g.svg" alt="" />
              <img className="md:p-4" src="https://hotel.bdtask-demo.com/xainhotel/assets/img/banner/2021-01-11/p.svg" alt="" />
              <img className="md:p-4" src="https://hotel.bdtask-demo.com/xainhotel/assets/img/banner/2021-01-11/s.svg" alt="" />
            </div>
            <div className="md:grid grid-cols-6 gap-4 justify-center items-center mb-4">
              <img src="https://hotel.bdtask-demo.com/xainhotel/assets/img/banner/2021-01-11/s1.svg" alt="" />
              <img src="https://hotel.bdtask-demo.com/xainhotel/assets/img/banner/2021-01-11/s2.svg" alt="" />
              <img src="https://hotel.bdtask-demo.com/xainhotel/assets/img/banner/2021-01-11/s3.svg" alt="" />
            </div>
          </div>
        </div>

        <div className="p-4 mb-10">
          <div className="text-center p-6 mb-6">
            <h3><b>Our Team</b></h3>
            <p>Meet the people who make awesome stuffs</p>
          </div>
          <main className="md:grid grid-cols-4 gap-3">
            <div className="contain">
              <div className="content">
                <a href="http://gr-help.netlify.app/" >
                <div className="content-overlay"></div>
                <img className="content-image" alt="" src="https://hotel.bdtask-demo.com/xainhotel/assets/img/banner/2021-04-04/0.jpg" />
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">Lorem Ipsum</h3>
                  <p className="content-text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from</p>
                </div>
                </a>
              </div>
              <h3 className="title">Mark Edwards</h3>
            </div>
            <div className="contain">
              <div className="content">
                <a href="http://gr-help.netlify.app/" >
                <div className="content-overlay"></div>
                <img className="content-image" alt="" src="https://hotel.bdtask-demo.com/xainhotel/assets/img/banner/2021-04-04/01.jpg" />
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">Lorem Ipsum</h3>
                  <p className="content-text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from</p>
                </div>
                </a>
              </div>
              <h3 className="title">Gregory Mark</h3>
            </div>
            <div className="contain">
              <div className="content">
                <a href="http://gr-help.netlify.app/" >
                <div className="content-overlay"></div>
                <img className="content-image" alt="" src="https://hotel.bdtask-demo.com/xainhotel/assets/img/banner/2019-06-15/06.jpg" />
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">Lorem Ipsum</h3>
                  <p className="content-text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from</p>
                </div>
                </a>
              </div>
              <h3 className="title">John Carloz</h3>
            </div>
            <div className="contain">
              <div className="content">
                <a href="http://gr-help.netlify.app/" >
                <div className="content-overlay"></div>
                <img className="content-image" alt="" src="https://hotel.bdtask-demo.com/xainhotel/assets/img/banner/2021-11-18/0.jpg" />
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">Lorem Ipsum</h3>
                  <p className="content-text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from</p>
                </div>
                </a>
              </div>
              <h3 className="title">Lewis</h3>
            </div>
          </main>
        </div>
      </div>
    </main>
  )
}

export default About
