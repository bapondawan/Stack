import React from 'react';
import { IoMdList } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

const ToggleName = () => {
    return (
        <div>
                    <div className="absolute group mt-14 text-left text-sm w-48  bg-white outline outline-1 outline-blue-500" id="falu">
          <ul>
            <li className="w-full hover:bg-gray-300 p-1 pl-2">Home</li>
            <li className="w-full hover:bg-gray-300 p-1 pl-2">Question</li>
            <li className="w-full hover:bg-gray-300 p-1 pl-2">Tags</li>
            <li className="w-full hover:bg-gray-300 mt-4 p-1 pl-2">User</li>
            <li className="w-full hover:bg-gray-300 p-1 mb-5 pl-2">Campaign</li>
          </ul>
          <div className="pl-2">
          <div>
            <div className="block w-full">
            <p className="float-left w-[80] block text-md font-bold ">COLLECTIVES</p> <FaPlus className="text-gray-500 hover:text-black block float-right w-[20] mr-1"/>
            </div> <br/>
            <p className="p-1 hover:bg-gray-300">Explore Collectives</p>
          </div>
          <div>
          <div className="block w-full">
            <p className="float-left w-[80] block text-md font-bold ">LABS</p> <FaInfoCircle className="text-gray-500 hover:text-black block float-right w-[20] mr-1"/>
            </div> <br/>
            <p className="p-1 hover:bg-gray-300">Discussions</p>
          </div>
          <div>
          <div className="block w-full">
            <p className="float-left w-[80] block text-md font-bold ">LABS</p> <FaInfoCircle className="text-gray-500 hover:text-black block float-right w-[20] mr-1"/>
            </div> <br/>
            <p className="p-1 hover:bg-gray-300">Discussions</p>
          </div>
          </div>

        </div>
        </div>
    );
};

export default ToggleName;