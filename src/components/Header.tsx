import {   faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faArrowLeft, faCommentSlash, faEllipsisVertical, faPhone, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';



export default function Header() {

    const [chatMenu, setChatMenu] = useState(false)
    return (
        <div className='z-50'>
            <div className='flex justify-between mx-6 pt-11 '>
                <button className='flex justify-center items-center gap-5'>
                    <FontAwesomeIcon className='h-6 2-6 ' icon={faArrowLeft} />
                    <h3 className='text-2xl font-semibold'>Trip 1</h3>
                </button>
                <button className='flex justify-center items-center'>
                    <FontAwesomeIcon className='w-5 h-5 ' icon={faPenToSquare} />
                </button>
            </div>
            <div className='flex justify-between items-center mx-6 my-4'>
                <div className='flex justify-center'>
                    <div className='flex justify-center items-center '>
                        <img className='size-12 rounded-full' src={"/profile.jpg"} alt="" />
                    </div>
                    <div className='ml-4 '>
                        <div className='flex gap-2 -mb-1.5'> 
                            <h6 >From <strong className='font-semibold text-lg ml-1'> IGI Airport, T3</strong></h6>
                           
                        </div>
                        <div className='flex gap-2 '>  
                        <h6 >To <strong className='font-semibold text-lg ml-1'> Sector 28</strong></h6>
                        </div>
                    </div>
                </div>
                <button className=' relative flex justify-center items-center  w-6 h-6 ' 
                onClick={()=>{
                    chatMenu ? setChatMenu(false) : setChatMenu(true)
                }}
                >
                    <FontAwesomeIcon className='' icon={faEllipsisVertical} />
                    {chatMenu && (
                        <div className='absolute right-0 w-36 top-full bg-white border  border-gray-200 rounded-md mt-1 shadow-xl'>
                            
                                <button className='py-2 px-2 h-10 text-left border-b w-full  hover:bg-gray-200 cursor-pointer text-sm font-semibold'>
                                    <FontAwesomeIcon className='w-4 h-4 mr-2' icon={faUsers} />
                                     Members
                                     </button>
                                <button className='py-2 px-2 h-10 text-left border-b w-full hover:bg-gray-200 cursor-pointer text-sm font-semibold'>
                                    <FontAwesomeIcon className='w-4 h-4 mr-2' icon={faPhone} />
                                     Share Number
                                     </button>
                                <button className='py-2 px-2 h-10 text-left w-full hover:bg-gray-200 cursor-pointer text-sm font-semibold'>
                                    <FontAwesomeIcon className='w-4 h-4  mr-2' icon={faCommentSlash} />
                                    Report
                                    </button>
                            
                        </div>
                    )}
                    </button>
            </div>
            <div className='w-screen border-b-2'></div>
        </div>
    )
}
