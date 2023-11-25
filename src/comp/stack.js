import React from "react";
import { IoMdList } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

const StackFlow = () => {
  return (
    <div>
      <div className="nav bg-gray-200 w-full h-14 ">
        <IoMdList className="text-4xl float-left block"/>
        <div className="float-left block"><p>StackOverFlow</p></div>
        <div className="float-left block">
          <ul>
            <li className="float-left mx-3 w-24 text-center  outline-none rounded-xl bg-gray-200 hover:bg-gray-400 ">1</li>
            <li className="float-left mx-3 w-24 text-center  outline-none rounded-xl bg-gray-200 hover:bg-gray-400 ">2</li>
            <li className="float-left mx-3 w-24 text-center  outline-none rounded-xl bg-gray-200 hover:bg-gray-400 ">3</li>
          </ul>
        </div>
        <div className="w-[50%] mt-3 float-left block bg-gray-200 group/item border-2 border-solid border-gray-700 rounded-xl h-8">
        <FaSearch className="float-left block m-1"/>
          <input className="group-focus/item:border-red-600 w-[80%] outline-none float-left block bg-gray-200" placeholder="Search" type="text"></input>
        </div>
      </div>
    </div>
  );
};

export default StackFlow;
