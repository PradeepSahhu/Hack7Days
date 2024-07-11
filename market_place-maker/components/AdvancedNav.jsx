export default function AdvancedNav() {
  return (
    <div class="bg-black text-white">
      <nav class="bg-black text-white shadow-lg">
        <div class=" mx-auto px-4">
          <div class="flex justify-between">
            <div class="flex space-x-7">
              <div>
                <a href="#" class="flex items-center py-4 px-2">
                  <img
                    src="./block-.png"
                    alt="Logo"
                    className="h-8 w-8 mr-2 rounded-3xl fill-[#1679AB]"
                  />
                  <span class="font-semibold text-yellow-400 text-lg">
                    Marketplace Maker
                  </span>
                </a>
              </div>
              <div class="hidden md:flex items-center space-x-1">
                <a
                  href="#"
                  class="py-4 px-2 text-white font-semibold hover:text-[#1679AB] transition duration-300"
                >
                  Home
                </a>
                <div class="relative group">
                  <button class="py-4 px-2 text-white font-semibold hover:text-[#1679AB] transition duration-300">
                    Services
                  </button>
                  <div class="absolute hidden  bg-black shadow-lg w-[30rem] group-hover:flex group-hover:justify-between -left-52 gap-x-5 z-10">
                    <div className="inline-block w-1/2">
                      <div className="mb-6">
                        <p className="text-gray-700 text-start text-md">
                          Services
                        </p>
                      </div>

                      <hr className="col-start-1 col-end-4 w-full h-1 mx-auto bg-gray-100 border-0 rounded  dark:bg-gray-700" />
                      <div className="flex justify-between mt-5 items-center">
                        <img
                          src="./right-arrow.png"
                          alt="Logo"
                          className="h-8  mr-2 w-1/12"
                        />
                        <a
                          href="#"
                          class="block px-1 py-2 text-white hover:bg-gray-100 w-11/12 text-sm"
                        >
                          Service 1
                        </a>
                      </div>

                      <div className="flex justify-between">
                        <img
                          src="./right-arrow.png"
                          alt="Logo"
                          className="h-8  mr-2 w-1/12"
                        />
                        <a
                          href="#"
                          class="block px-1 py-2 text-white hover:bg-gray-100 w-11/12 text-sm"
                        >
                          Service 2
                        </a>
                      </div>
                      <div className="flex justify-between">
                        <img
                          src="./right-arrow.png"
                          alt="Logo"
                          className="h-8  mr-2 w-1/12"
                        />
                        <a
                          href="#"
                          class="block px-1 py-2 text-white hover:bg-gray-100 w-11/12 text-sm"
                        >
                          Service 3
                        </a>
                      </div>
                    </div>
                    <div className="bg-black inline-block w-1/2">
                      <div className="mb-6">
                        <p className="text-gray-700 text-start text-md">
                          Services
                        </p>
                      </div>

                      <hr className="col-start-1 col-end-4 w-full h-1 mx-auto bg-gray-100 border-0 rounded  dark:bg-gray-700" />
                      <div className="flex justify-between mt-5 items-center">
                        <img
                          src="./right-arrow.png"
                          alt="Logo"
                          className="h-8  mr-2 w-1/12"
                        />
                        <a
                          href="#"
                          class="block px-1 py-2 text-white hover:bg-gray-100 w-11/12 text-sm"
                        >
                          Service 1
                        </a>
                      </div>

                      <div className="flex justify-between">
                        <img
                          src="./right-arrow.png"
                          alt="Logo"
                          className="h-8  mr-2 w-1/12"
                        />
                        <a
                          href="#"
                          class="block px-1 py-2 text-white hover:bg-gray-100 w-11/12 text-sm"
                        >
                          Service 2
                        </a>
                      </div>
                      <div className="flex justify-between">
                        <img
                          src="./right-arrow.png"
                          alt="Logo"
                          className="h-8  mr-2 w-1/12"
                        />
                        <a
                          href="#"
                          class="block px-1 py-2 text-white hover:bg-gray-100 w-11/12 text-sm"
                        >
                          Service 3
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  class="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
                >
                  About
                </a>
                <a
                  href="#"
                  class="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="items-center flex">
              <div className="flex justify-center ">
                <input className="  text-[16px] rounded-sm px-1 py-0.5 border-1 w-96 border-yellow-400 bg-transparent border-2 placeholder:Search text-gray-600 focus:border-yellow-400" />
              </div>
            </div>

            <div className="items-center flex gap-5">
              <div className="flex justify-center ">
                <button className="  text-[16px] rounded-3xl px-1 py-0.5 bg-[#1679AB] border-1  text-black">
                  Search
                </button>
              </div>
              <div className="flex justify-center ">
                <button className="  text-[16px] rounded-md px-1 py-0.5  bg-gray-600 text-white">
                  Connect
                </button>
              </div>
              <div className="flex justify-center ">
                <button className="  text-[16px] rounded-md px-1 py-0.5 background-blue-800 border-1 bg-yellow-400 text-black">
                  Disconnect
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <hr className="col-start-1 col-end-4 w-full h-0.5 mx-auto bg-gray-100 border-0 rounded  dark:bg-gray-700" />
    </div>
  );
}
