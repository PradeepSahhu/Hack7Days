export default function NextNav() {
  return (
    <nav class="bg-white shadow-lg">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between">
          <div class="flex space-x-7">
            <div>
              <a href="#" class="flex items-center py-4 px-2">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Logo"
                  class="h-8 w-8 mr-2"
                />
                <span class="font-semibold text-gray-500 text-lg">Navbar</span>
              </a>
            </div>
            <div class="hidden md:flex items-center space-x-1">
              <a
                href="#"
                class="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
              >
                Home
              </a>
              <div class="relative group">
                <button class="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">
                  Services
                </button>
                <div class="absolute hidden group-hover:flex bg-white shadow-lg w-[40rem] mx-auto left-0 right-0 justify-center">
                  <div class="inline-block w-1/2">
                    <a
                      href="#"
                      class="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Service 1
                    </a>
                    <a
                      href="#"
                      class="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Service 2
                    </a>
                    <a
                      href="#"
                      class="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Service 3
                    </a>
                  </div>
                  <div class="bg-teal-900 inline-block w-1/2">
                    <a
                      href="#"
                      class="block px-4 py-2 text-white hover:bg-gray-100"
                    >
                      Service 4
                    </a>
                    <a
                      href="#"
                      class="block px-4 py-2 text-white hover:bg-gray-100"
                    >
                      Service 5
                    </a>
                    <a
                      href="#"
                      class="block px-4 py-2 text-white hover:bg-gray-100"
                    >
                      Service 6
                    </a>
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
          <div class="md:hidden flex items-center">
            <button class="outline-none mobile-menu-button">
              <svg
                class="w-6 h-6 text-gray-500 hover:text-blue-500"
                x-show="!showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="hidden mobile-menu">
        <ul class="">
          <li>
            <a
              href="#"
              class="block text-sm px-2 py-4 text-gray-500 hover:bg-gray-200 transition duration-300"
            >
              Home
            </a>
          </li>
          <li class="relative group">
            <button class="block text-sm px-2 py-4 text-gray-500 hover:bg-gray-200 transition duration-300">
              Services
            </button>
            <div class="absolute hidden group-hover:flex bg-white shadow-lg w-full justify-between">
              <div class="inline-block w-1/2">
                <a
                  href="#"
                  class="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Service 1
                </a>
                <a
                  href="#"
                  class="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Service 2
                </a>
                <a
                  href="#"
                  class="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Service 3
                </a>
              </div>
              <div class="bg-teal-900 inline-block w-1/2">
                <a
                  href="#"
                  class="block px-4 py-2 text-white hover:bg-gray-100"
                >
                  Service 4
                </a>
                <a
                  href="#"
                  class="block px-4 py-2 text-white hover:bg-gray-100"
                >
                  Service 5
                </a>
                <a
                  href="#"
                  class="block px-4 py-2 text-white hover:bg-gray-100"
                >
                  Service 6
                </a>
              </div>
            </div>
          </li>
          <li>
            <a
              href="#"
              class="block text-sm px-2 py-4 text-gray-500 hover:bg-gray-200 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block text-sm px-2 py-4 text-gray-500 hover:bg-gray-200 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
