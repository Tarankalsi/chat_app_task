// import Header from "../components/Header"
// import MessageReciever from "../components/MessageReciever"
// import MessageSender from "../components/MessageSender"
// import TextArea from "../components/TextArea"


// export default function Chat() {
//   return (
//     <div className="bg-chatBackground  min-h-screen">
//         <div className="fixed bg-chatBackground">
//             <Header/>
//         </div>
//         <div className="flex-1 overflow-y-auto px-4">


//         <MessageSender />
//         <MessageSender />
//         <MessageReciever />
//         <MessageReciever />
//         {/* Add more MessageSender and MessageReceiver components as needed */}
//       </div>
//         <div className=" fixed bottom-0 bg-chatBackground pb-8">
//        <TextArea/>
//         </div>
//     </div>
//   )
// }


import axios from "axios";
import Header from "../components/Header";
import MessageReciever from "../components/MessageReciever";

import MessageSender from "../components/MessageSender";
import TextArea from "../components/TextArea";
import { useEffect, useRef, useState } from "react";


export type chatProp = {

  id: string,
  message: string,
  sender: {
    image: string,
    is_kyc_verified: boolean,
    self: boolean,
    user_id: string
  },
  time: string

}


export default function Chat() {

  const [chatData, setChatData] = useState<chatProp[]>([])
  const chatEndRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0)
  const loadingMoreChats = useRef(false)
const initialLoad = useRef(true)

  try {
    useEffect(() => {
      const fetchChats = async (pageNumber: number) => {
        try {
          const response = await axios.get(`https://qa.corider.in/assignment/chat?page=${pageNumber}`)
          if (pageNumber === 0) {
            setChatData(response.data.chats)
          } else {
            setChatData(prevChats => [...response.data.chats, ...prevChats])
          }
          loadingMoreChats.current = false
        } catch (error) {

        }
      }

      fetchChats(page)
      
    }, [page])

    useEffect(() => {
      if (chatEndRef.current && initialLoad.current) {
        chatEndRef.current.scrollIntoView({ behavior: "instant" }); // No smooth transition on initial load
      }

    }, [chatData])


  } catch (error) {
    alert("Chat Not Found")
  }

  useEffect(() => {

    const handleScroll = async () => {
      const scrollTop = document.documentElement.scrollTop;
      const prevScrollHeight = document.documentElement.scrollHeight;
      // const clientHeight = window.innerHeight;
   
      if (scrollTop === 0 && !loadingMoreChats.current) {
        loadingMoreChats.current = true
          setPage(prevPage => prevPage + 1)

          await new Promise(resolve => setTimeout(resolve, 100));

          const newScrollPosition = document.documentElement.scrollHeight - prevScrollHeight + scrollTop;


          window.scrollTo({
            top: newScrollPosition,
            behavior: "instant" // or "smooth" if you prefer a smooth scroll
          });

          loadingMoreChats.current = false;
      }
     
    }



    window.addEventListener('scroll', handleScroll)

   return () =>{ window.removeEventListener('scroll',handleScroll)}
  }, [])



  return (
    <div className="bg-chatBackground min-h-screen flex flex-col">
      <div className="fixed bg-chatBackground">
        <Header />
      </div>
      <div className="mb-20 overflow-y-auto mt-36" >
    
        {
          chatData.map((chat: chatProp) => (
            chat.sender.self ?
              <MessageReciever key={chat.id} chat={chat} /> :
              <MessageSender key={chat.id} chat={chat} />

          ))
        }

        {/* Add more MessageSender and MessageReceiver components as needed */}
        <div ref={chatEndRef} /> {/* Attaching the ref to this div */}

      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-chatBackground pb-8">
        <TextArea />
      </div>
    </div>
  );
}
