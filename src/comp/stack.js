import React from "react";
import { IoMdList } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import ToggleName from "./togle";

const StackFlow = () => {
  function Bapon(){
    const hi = document.getElementById("visible");
    const arrre = hi.className;
    arrre === "invisible" ? hi.className="visible":hi.className="invisible";

  }

  return (
    <div className="container flex text-center m-auto bg-gray-200 h-[100vh]">
      <div className="nav relative bg-gray-200 w-full h-14 ">
        <button
          className="float-left" id="buttonfro" onClick={Bapon} >
          <IoMdList className="text-4xl my-2 float-left block" />
        </button>
        <div id="visible" className="invisible">
          <div className="absolute group mt-14 text-left text-sm w-48  bg-white outline outline-1 outline-blue-500">
            <ul>
              <li className="w-full hover:bg-gray-300 p-1 pl-2">Home</li>
              <li className="w-full hover:bg-gray-300 p-1 pl-2">Question</li>
              <li className="w-full hover:bg-gray-300 p-1 pl-2">Tags</li>
              <li className="w-full hover:bg-gray-300 mt-4 p-1 pl-2">User</li>
              <li className="w-full hover:bg-gray-300 p-1 mb-5 pl-2">
                Campaign
              </li>
            </ul>
            <div className="pl-2">
              <div>
                <div className="block w-full">
                  <p className="float-left w-[80] block text-md font-bold ">
                    COLLECTIVES
                  </p>
                  <FaPlus className="text-gray-500 hover:text-black block float-right w-[20] mr-1" />
                </div>
                <br />
                <p className="p-1 hover:bg-gray-300">Explore Collectives</p>
              </div>
              <div>
                <div className="block w-full">
                  <p className="float-left w-[80] block text-md font-bold ">
                    LABS
                  </p>
                  <FaInfoCircle className="text-gray-500 hover:text-black block float-right w-[20] mr-1" />
                </div>
                <br />
                <p className="p-1 hover:bg-gray-300">Discussions</p>
              </div>
              <div>
                <div className="block w-full">
                  <p className="float-left w-[80] block text-md font-bold ">
                    LABS
                  </p>
                  <FaInfoCircle className="text-gray-500 hover:text-black block float-right w-[20] mr-1" />
                </div>
                <br />
                <p className="p-1 hover:bg-gray-300">Discussions</p>
              </div>
            </div>
          </div>
        </div>
        <div className="float-left my-3 ml-2 block">
          <p>StackOverFlow</p>
        </div>
        <div className="float-left block">
          <ul className="my-3">
            <li className="float-left h-6 mx-3 w-24 text-center  outline-none rounded-xl bg-gray-200 hover:bg-gray-400 ">
              About
            </li>
            <li className="float-left h-6 mx-3 w-24 text-center  outline-none rounded-xl bg-gray-200 hover:bg-gray-400 ">
              Products
            </li>
            <li className="float-left h-6 mx-3 w-24 text-center  outline-none rounded-xl bg-gray-200 hover:bg-gray-400 ">
              For Teams
            </li>
          </ul>
        </div>
        <div className="w-[45%] mt-3 float-left block bg-gray-200 outline outline-1 outline-blue-300 shadow-lg focus-within:outline-red-400 rounded-xl h-8">
          <FaSearch className="float-left block m-1" />
          <input
            className="group w-[80%] outline-none float-left block bg-gray-200 font-mono"
            placeholder="Search"
            type="text"
          ></input>
        </div>
        <div>
          <button className="rounded-md bg-blue-100 w-20 h-8 ml-2 my-3 border-none outline outline-1 outline-blue-600 hover:bg-blue-400">
            Log in
          </button>
          <button className="rounded-md bg-blue-600 text-white w-20 h-8 ml-2 my-3 border-none outline outline-1 outline-blue-600 hover:bg-blue-400">
            Sign up
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default StackFlow;
