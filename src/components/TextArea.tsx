import { faPaperPlane, faStickyNote } from '@fortawesome/free-regular-svg-icons'
import { faCamera, faPaperclip, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';


export default function TextArea() {
    const [attachmentMenu, setAttachmentMenu] = useState(false)
    return (
        <div className="flex justify-center w-screen">
            <div className="rounded-xl h-11 bg-white flex justify-between items-center w-full w-screen-xl px-4 mx-6 sm:mx-20 md:mx-36 lg:mx-56">
                <input
                    type="text"
                    className="w-full h-6 px-2 focus:outline-none"
                    placeholder="Message"
                />
                <div className="flex gap-4 md:gap-6 lg:gap-8">
                    <button type="button" className='relative' onClick={() => attachmentMenu ?setAttachmentMenu(false) :setAttachmentMenu(true)}>
                        <FontAwesomeIcon className="text-gray-500 hover:text-gray-700 transition-colors duration-200" icon={faPaperclip} />
                        {attachmentMenu && (
                            <div className='absolute right-0 w-28 bottom-full bg-messageAttachment gap-2 text-white  flex justify-center  rounded-full mt-1 shadow-xl'>

                                <button className='py-2 px-1 h-10 cursor-pointer text-sm font-semibold'>
                                    <FontAwesomeIcon className='w-4 h-4 ' icon={faCamera} />

                                </button>
                                <button className='py-1 px-1 h-10  flex justify-center items-center cursor-pointer text-sm font-semibold'>
                                    <FontAwesomeIcon className='w-4 h-4 ' icon={faVideo} />

                                </button>
                                <button className='py-2 px-1 h-10 flex justify-center items-center cursor-pointer text-sm font-semibold'>
                                    <FontAwesomeIcon className='w-4 h-4  ' icon={faStickyNote} />

                                </button>

                            </div>
                        )}
                    </button>
                    <button type="button"  >
                        <FontAwesomeIcon className="text-gray-500 hover:text-gray-700 transition-colors duration-200" icon={faPaperPlane} />

                    </button>
                </div>
            </div>
        </div>
    );
}

