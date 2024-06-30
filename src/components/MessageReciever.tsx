import { chatProp } from "../pages/Chat";


export default function MessageReciever({chat} : {chat : chatProp}) {
  return (
    <div className="my-5 mx-3 md:mx-6 flex justify-end ">
       <div className="rounded-tl-lg rounded-tr-none rounded-b-xl rounded-l-xl bg-recieverChat  max-w-64 sm:max-w-96  px-4 py-2 shadow-lg ">
                <h5 className='text-sm  text-white'>{chat.message}</h5>
            </div>
    </div>
  )
}
