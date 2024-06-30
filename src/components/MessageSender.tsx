import { chatProp } from "../pages/Chat"



export default function MessageSender({chat}: {chat: chatProp}) {
    return (
        <div className="flex gap-2 mx-2 my-5">
            <Avatar img={chat.sender.image} />
            <div className="rounded-tl-none rounded-r-xl rounded-b-xl rounded-l-xl bg-white max-w-64 sm:max-w-96 px-4 py-2 shadow-md ">
                <h5 className='text-sm  text-gray-500'>{chat.message}</h5>
            </div>
        </div>
    )
}


function Avatar({img}:{img:string}) {
    return (
        <div>
            <img className='h-6 w-6 rounded-full' src={img} alt="" />
        </div>
    )
}