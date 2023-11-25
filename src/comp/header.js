import React from 'react';
import logo from "./logo.png";
const HeaderPage = () => {
    return (
        <div>
            <div className='grid grid-cols-9 bg-red-300 w-full h-[50px] relative'>
                <div className='col-span-1 '>
                    <img src={logo} />
                </div>
                <div className='col-span-6 bg-green-200 text-center relative'>
                    <ul className='decoretion-none block mx-auto w-[100%] abs'>
                        <li className='bg-green-600 hover:bg-red-600 float-left my-3 w-[20%] h-[100%] group/item'>Model 1
                            <div className='bg-blue-500 absolute group/edit invisible hover:bg-slate-200 group-hover/item:visible w-[20%]'>
                                <ul className='decoretion-none bg-blue-500 '>
                                    <li className='bg-green-400 hover:bg-green-200 w-30 mx-0 w-90'>Model1.1</li>
                                    <li className='bg-green-400 hover:bg-green-200 w-30 mx-0 w-90'>Model1.2</li>
                                    <li className='bg-green-400 hover:bg-green-200 w-30 mx-0 w-90'>Model1.3</li>
                                    <li className='bg-green-400 hover:bg-green-200 w-30 mx-0 w-90'>Model1.4</li>
                                    <li className='bg-green-400 hover:bg-green-200 w-30 mx-0 w-90'>Model1.5</li>
                                    <li className='bg-green-400 hover:bg-green-200 w-30 mx-0 w-90'>Model1.6</li>
                                    <li className='bg-green-400 hover:bg-green-200 w-30 mx-0 w-90'>Model1.7</li>
                                    <li className='bg-green-400 hover:bg-green-200 w-30 mx-0 w-90'>Model1.8</li>
                                    <li className='bg-green-400 hover:bg-green-200 w-30 mx-0 w-90'>Model1.9</li>
                                    <li className='bg-green-400 hover:bg-green-200 w-30 mx-0 w-90'>Model1.10</li>
                                </ul>
                            </div>
                        </li>
                        <li className='bg-green-600 hover:bg-red-600 float-left px-4 my-3 w-[20%]'>Model 2</li>
                        <li className='bg-green-600 hover:bg-red-600 float-left px-4 my-3 w-[20%]'>Model 3</li>
                        <li className='bg-green-600 hover:bg-red-600 float-left px-4 my-3 w-[20%]'>Model 4</li>
                        <li className='bg-green-600 hover:bg-red-600 float-left px-4 my-3 w-[20%]'>Model 5</li>
                    </ul>
                </div>
                <div className=' text-center bg-purple-500 mx-auto col-span-2 w-full h-full'>
                    <button className='border-2 border-blue-600 p-3 w-40 h-[50%] my-5 bg-gray-500 hover:bg-blue-500 outline-none rounded-md hover:rotate-360 transition delay-200'>Accounts</button>
                </div>
            </div>
        </div>
    );
};

export default HeaderPage;