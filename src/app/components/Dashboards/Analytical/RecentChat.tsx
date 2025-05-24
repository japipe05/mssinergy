"use client"

import React, { useState } from 'react';
import SimpleBar from 'simplebar-react';
import user1 from '/public/images/profile/user-5.jpg';
import user2 from '/public/images/profile/user-6.jpg';
import { Icon } from '@iconify/react/dist/iconify.js';
import CardBox from '../../shared/CardBox';
import Image from 'next/image';
import { Button, Textarea, TextInput } from 'flowbite-react';

const RecentChat = () => {
  const [chats, setChats] = useState([
    {
      username: 'Kevin Hsu',
      content: 'Hello World!',
      img: user1,
      id: 1,
      color:"bg-lightindigo dark:bg-lightindigo"
    },
    {
      username: 'Alice Chen',
      content: 'Love it! :heart:',
      img: user1,
      id: 2,
       color:"bg-lightsuccess dark:bg-lightsuccess"
    },
    {
      username: 'Kevin Hsu',
      content: 'Check out my Github at https://github.com/WigoHunter',
      img: user1,
      id: 3,
      color:"bg-lightsuccess dark:bg-lightsuccess"
    },
    {
      username: 'KevHs',
      content:
        'Lorem ipsum dolor sit amet, nibh ipsum. Cum class sem inceptos incidunt sed sed.',
      img: user2,
      id: 4,
      color:"bg-lightindigo dark:bg-lightindigo"
    },
    {
      username: 'Kevin Hsu',
      content: 'So',
      img: user1,
      id: 5,
       color:"bg-lightinfo dark:bg-lightinfo"
    },
    {
      username: 'Kevin Hsu',
      content: 'It’s Great opportunity to work.',
      img: user1,
      id: 6,
       color:"bg-lightsuccess dark:bg-lightsuccess"
    },
    {
      username: 'Kevin Hsu',
      content: 'You can sign-up now to try out our private beta!',
      img: user1,
      id: 7,
      color:"bg-lightsuccess dark:bg-lightsuccess"
    },
    {
      username: 'Alice Chen',
      content: 'Definitely! Sounds great!',
      img: user1,
      id: 8,
      color:"bg-lightsuccess dark:bg-lightsuccess"
    },
  ]);

  const [message, setMessage] = useState('');

  const handleChange = (e:any) => {
    const message2 = e.target.value;
    setMessage(message2);
  };

  const submitMessage = (e:any) => {
    e.preventDefault();
    setChats(
      [
        ...chats,
        {
          username: 'Kevin Hsu',
          color:"primary",
          content: message,
          img: user2,
          id: chats.length + 1,
        },
      ],
    );
       setMessage('')
  };
  const username = 'Kevin Hsu';

  return (

<CardBox className='p-0'>
<div className="py-6 ">
<div className="card-title px-6">
<span className="lstick align-middle inline-block bg-primary"></span>
 Recent Chats
</div>
<ul className="list-unstyled recent-chats">
        <SimpleBar style={{ height: '540px' }} className='px-6' >
           {chats.map((chat) => (
            <li
              className={`chat mt-6 ${
                username === chat.username
                  ? 'flex flex-row-reverse text-end mt-2'
                  : 'flex gap-3 ms-auto mt-2'
              }`}
              key={chat.id}
            >
                            {username !== chat.username?
                            <div className='flex justify-between w-full'>
                       <div className='flex gap-3' >
                       <div>
                {username !== chat.username && (
                  <Image
                    src={chat.img}
                    alt={`${chat.username}'s profile pic`}
                    width="40"
                    className="rounded-full"
                  />
                )}
              </div>
              <div className='flex flex-col gap-1'>
              {
                  username === chat.username ? '' : <h5 className="text-muted dark:text-muted text-sm font-semibold"> James Anderson </h5>
                }
              <p
                className={`p-3 mb-1 chat-content text-dark dark:text-darkmuted font-medium ${
                  username === chat.username ? 'bg-lightsubtle right-chat-content dark:bg-darksubtle' : `${chat.color} left-chat-content`
                }`}
              >
                {' '}
                {chat.content}
              </p>
              </div>
                       </div>
                        <span className='self-center dark:text-darkmuted text-xs ms-4'>10:36</span>
</div>:
<div className='flex gap-3'>
<div>
<div>
                {username !== chat.username && (
                  <Image
                    src={chat.img}
                    alt={`${chat.username}'s profile pic`}
                    width="40"
                    className="rounded-full"
                  />
                )}
              </div>
              <div className='flex flex-col gap-1'>
              {
                  username === chat.username ? '' : <h5 className="text-muted dark:text-muted text-sm font-medium"> {chat.username} </h5>
                }
              <p
                className={`p-3 mb-1 text-dark dark:text-darkmuted font-medium ${
                  username === chat.username ? 'bg-lightsubtle right-chat-content dark:bg-darksubtle' : `${chat.color} left-chat-content`
                }`}
              >
                {' '}
                {chat.content}
              </p>
              </div>
  </div>
  <span className='self-center dark:text-darkmuted text-xs ms-4'>10:36</span>
  </div>
  }

            </li>
    
          ))}
    </SimpleBar>
      </ul>
</div>
      <div className="border-t border-border dark:border-darkborder p-6">
        <form onSubmit={(e) => submitMessage(e)}>
          <div className='grid grid-cols-12'>
            <div className='lg:col-span-8 col-span-12' >
              <div className="input-field mt-0 mb-0">
                <Textarea id="comment" placeholder="Leave a comment..." value={message} onChange={handleChange} className='border-0 text-dark dark:text-darkmuted' required rows={2} />
              </div>
            </div>
            <div className='lg:col-span-4 col-span-12 ms-auto'>
              <Button color="primary" type="submit" value="submit" className='h-12 w-12 flex items-center justify-center rounded-full'>
                <Icon icon='solar:plain-3-line-duotone' className='text-2xl text-white shrink-0' />
              </Button>
            </div>
          </div>
        </form>
      </div>
</CardBox>
  );
};

export default RecentChat;
