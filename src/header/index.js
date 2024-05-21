import { Link } from "react-router-dom";
import { socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";

const Headermain = () => {
  return (
    <>
      <header className="fixed-top site__header bg-black ">
        <div className="flex align-items-center justify-content-between p-4">
          <div>
            <Link className="text-3xl" to="/">
              <button className="relative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
                Portfolio
              </button>
            </Link>
          </div>
          <div>
            <ul className="flex flex-row justify-content-between align-item-center text-3xl">
              <li className="mr-6">
                <Link to="/">
                  <button className="h-14 cursor-pointer text-base font-bold transition-all bg-white text-black px-6 py-2 rounded-xl border-blue-200 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-blue-400 shadow-blue-400 active:shadow-none">
                    Home
                  </button>
                </Link>
              </li>
              <li className="mr-6">
                <Link to="/portfolio">
                  <button className="h-14 cursor-pointer text-base font-bold transition-all bg-white text-black px-6 py-2 rounded-xl border-blue-200 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-blue-400 shadow-blue-400 active:shadow-none">
                    Portfolio
                  </button>
                </Link>
              </li>
              <li className="mr-6">
                <Link to="/about">
                  <button class="h-14 cursor-pointer text-base font-bold transition-all bg-white text-black px-6 py-2 rounded-xl border-blue-200 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-blue-400 shadow-blue-400 active:shadow-none">
                    About
                  </button>
                </Link>
              </li>
              <li className="mr-6">
                <Link to="/contact">
                  <button className="h-14 cursor-pointer text-base font-bold transition-all bg-white text-black px-6 py-2 rounded-xl border-blue-200 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-blue-400 shadow-blue-400 active:shadow-none">
                    Contact
                  </button>
                </Link>
              </li>
              <li className="mr-6">
                <Themetoggle />
              </li>
            </ul>
          </div>
        </div>
      </header>
      <footer className="flex justify-center items-center w-full bg-black fixed bottom-0 z-10">
        <div className="flex justify-center items-center text-white">
          <button className="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-blue-800 to-blue-900 px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-blue-900 hover:to-blue-800">
            <svg
              viewBox="0 0 18 10"
              height="18"
              width="10"
              xmlns="http://www.w3.org/2000/svg"
              fill="#FFFFFF"
            >
              <path d="M20.9,2H3.1A1.1,1.1,0,0,0,2,3.1V20.9A1.1,1.1,0,0,0,3.1,22h9.58V14.25h-2.6v-3h2.6V9a3.64,3.64,0,0,1,3.88-4,20.26,20.26,0,0,1,2.33.12v2.7H17.3c-1.26,0-1.5.6-1.5,1.47v1.93h3l-.39,3H15.8V22h5.1A1.1,1.1,0,0,0,22,20.9V3.1A1.1,1.1,0,0,0,20.9,2Z" />
            </svg>
            <a className="mr-3" href={socialprofils.facebook}>
              Facebook
            </a>
          </button>

          <button className="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900">
            <svg
              viewBox="0 0 24 24"
              height="24"
              width="10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#FFFFFF"
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              ></path>
            </svg>
            <a className="mr-3" href={socialprofils.github}>
              github
            </a>
          </button>
          <button className="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-blue-500 to-blue-800 px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-blue-800 hover:to-blue-600">
            <svg
              viewBox="0 0 24 24"
              height="24"
              width="10"
              xmlns="http://www.w3.org/2000/svg"
              fill="#FFFFFF"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <a className="mr-3" href={socialprofils.linkedin}>
              LinkedIn
            </a>
          </button>
        </div>
      </footer>
    </>
  );
};

export default Headermain;
