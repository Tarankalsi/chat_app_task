import { chatProp } from "../pages/Chat"



export default function MessageSender({ chat }: { chat: chatProp }) {
    return (
        <div className="flex gap-2 mx-1 sm:mx-5 my-5">
            <div>
            <Avatar img={chat.sender.image} />
            </div>
            
            <div className="rounded-tl-none rounded-r-xl rounded-b-xl rounded-l-xl bg-white max-w-64 sm:max-w-96 px-4 py-2 shadow-md ">
                <h5 className='text-sm  text-gray-500'>{chat.message}</h5>
            </div>
        </div>
    )
}


function Avatar({ img }: { img: string }) {
    return (
      <div className="relative">
        <img className='h-6 w-6 rounded-full' src={img} alt="" />
        <img className="absolute h-3 w-3 left-3.5 top-3.5 z-auto" src={"https://res.cloudinary.com/daygfelat/image/upload/social-media_muiodl.png"} alt="" />
      </div>
    );
  }