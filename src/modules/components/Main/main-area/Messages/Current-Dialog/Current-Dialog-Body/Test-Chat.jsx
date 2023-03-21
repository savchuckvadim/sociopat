// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Message from './Message';
// import './Chat.css';
// import InfiniteScroll from 'react-infinite-scroll-component';

// const Chat = () => {
//   const [messages, setMessages] = useState([]);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);

//   const fetchMessages = async () => {
//     try {
//       const response = await axios.get(`/api/messages?page=${page}`);
//       const newMessages = response.data.data;

//       if (newMessages.length === 0) {
//         setHasMore(false);
//       } else {
//         setMessages((prevMessages) => [...prevMessages, ...newMessages]);
//         setPage((prevPage) => prevPage + 1);
//       }
//     } catch (error) {
//       console.error('Failed to fetch messages:', error);
//     }
//   };

//   useEffect(() => {
//     fetchMessages();
//   }, []);

//   const groupedMessages = groupMessagesByDate(messages);

//   return (
//     <div className="chat">
//       <InfiniteScroll
//         dataLength={messages.length}
//         next={fetchMessages}
//         hasMore={hasMore}
//         loader={<h4>Loading...</h4>}
//         endMessage={
//           <p style={{ textAlign: 'center' }}>
//             <b>Yay! You have seen it all</b>
//           </p>
//         }
//       >
//         {Object.keys(groupedMessages).map((date) => (
//           <div key={date} className="chat-date-group">
//             <div className="chat-date">{date}</div>
//             {groupedMessages[date].map((message) => (
//               <Message key={message.id} message={message} />
//             ))}
//           </div>
//         ))}
//       </InfiniteScroll>
//     </div>
//   );
// };

// export default Chat;