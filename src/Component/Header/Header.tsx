import React from "react";

import f1_logo from "../../Resource/picture/f1_logo.png";

export default function Header() {
  return (
    <div className="bg-red-600">
      <nav className="container mx-auto border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
          <a href="https://www.formula1.com/en.html" className="md:p-0 py-4 flex items-center ">
            <img style={{ width: 130 }} src={f1_logo} alt="f1-logo" />

            <span className=" mx-5 self-center text-2xl font-semibold whitespace-nowrap text-white">
              F1 Race
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto h-full "
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col  rounded md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="block py-2 pl-3 pr-4 md:px-5 text-white md:rounded-none md:flex md:items-center  rounded hover:bg-gray-800 md:border-0 md:hover:bg-gray-800 md:p-0 dark:text-white md:dark:hover:text-white-500 dark:hover:bg-gray-800 dark:hover:text-white md:dark:hover:bg-transparent transition-all ease-linear md:h-14 ">
                <a href="/f1-result-demo/homepage" aria-current="page" >
                  Home
                </a>
              </li>
              <li className="block py-2 pl-3 pr-4 md:px-5 text-white md:rounded-none md:flex md:items-center  rounded hover:bg-gray-800 md:border-0 md:hover:bg-gray-800 md:p-0 dark:text-white md:dark:hover:text-white-500 dark:hover:bg-gray-800 dark:hover:text-white md:dark:hover:bg-transparent transition-all ease-linear md:h-14 ">
                <a target="_blank" href="https://www.formula1.com/en/latest.html">Latest</a>
              </li>
              <li className="block py-2 pl-3 pr-4 md:px-5 text-white md:rounded-none md:flex md:items-center  rounded hover:bg-gray-800 md:border-0 md:hover:bg-gray-800 md:p-0 dark:text-white md:dark:hover:text-white-500 dark:hover:bg-gray-800 dark:hover:text-white md:dark:hover:bg-transparent transition-all ease-linear md:h-14 ">
                <a target="_blank" href="https://www.formula1.com/en/video.html">Video</a>
              </li>
              <li className="block py-2 pl-3 pr-4 md:px-5 text-white md:rounded-none md:flex md:items-center  rounded hover:bg-gray-800 md:border-0 md:hover:bg-gray-800 md:p-0 dark:text-white md:dark:hover:text-white-500 dark:hover:bg-gray-800 dark:hover:text-white md:dark:hover:bg-transparent transition-all ease-linear md:h-14 ">
                <a target="_blank" href="https://www.formula1.com/en/f1-live.html">Live timing</a>
              </li>
              <li className="block py-2 pl-3 pr-4 md:px-5 text-white md:rounded-none md:flex md:items-center  rounded hover:bg-gray-800 md:border-0 md:hover:bg-gray-800 md:p-0 dark:text-white md:dark:hover:text-white-500 dark:hover:bg-gray-800 dark:hover:text-white md:dark:hover:bg-transparent transition-all ease-linear md:h-14 ">
                <a target="_blank" href="https://www.formula1.com/en/drivers.html">Driver</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
