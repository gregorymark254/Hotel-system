import React from 'react'

const ForgotPassword = () => {
  return (
    <main>
      <div className="min-h-screen">
        <div className="container mx-auto p-4">
          <div className="flex justify-center items-center ">
            <form className="block shadow-lg rounded-lg p-8">
              <div className="text-center p-5">
                <h3><b>Reset Password</b></h3>
                <p>Enter email to get password reset link</p>
              </div>  
              <div className="mb-4">
                <input
                  type="email"
                  required
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email Address"
                  name="mail" 
                  id="mail" 
                  // value={email}
                  // onChange = { (e) => setEmail(e.target.value) }
                />
              </div>
              <div className="text-center pt-1 mb-12 pb-1">
                <button
                  className="inline-block px-6 py-2.5 bg-[#C21010] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#e04444] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                  type="submit"
                > Submit
                </button>            
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ForgotPassword
