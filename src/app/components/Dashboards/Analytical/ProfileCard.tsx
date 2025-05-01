"use client"
import React from 'react';
import img1 from '/public/images/profile/user-2.jpg';
import { Icon } from '@iconify/react/dist/iconify.js';
import CardBox from '../../shared/CardBox';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'flowbite-react';

const ProfileCard = () => {
  return (
    <CardBox className="text-center px-0 pb-0">
      <div className='rounded-none p-6 pt-0 '>
        <div className="">
          <Image src={img1} alt="user" className="rounded-full mx-auto my-4 shadow" width="128" />
          <h3 className=" text-21 mb-1 font-medium text-dark  dark:text-white">Angela Dominic</h3>
          <h6 className="text-muted dark:text-muted mt-2 text-sm font-medium">Web Designer & Developer</h6>
          <ul className=" flex items-center justify-center gap-2 my-4">
            <li className="list-inline-item">
              <Link href="/" className="text-base hover:text-primary dark:hover:text-primary text-muted dark:text-darkmuted">
               <Icon icon='mdi:twitter' className='text-base social-icon' />
              </Link>
            </li>
            <li className="list-inline-item">
            <Link href="/" className="text-base hover:text-primary dark:hover:text-primary text-muted dark:text-darkmuted">
               <Icon icon='uil:facebook' className='text-base social-icon' />
              </Link>
            </li>
            <li className="list-inline-item">
            <Link href="/" className="text-base hover:text-primary dark:hover:text-primary text-muted dark:text-darkmuted">
               <Icon icon='ri:google-fill' className='text-base social-icon' />
              </Link>
            </li>
            <li className="list-inline-item">
            <Link href="/" className="text-base hover:text-primary dark:hover:text-primary text-muted dark:text-darkmuted">
               <Icon icon='mdi:youtube' className='text-base social-icon' />
              </Link>
            </li>
            <li className="list-inline-item">
            <Link href="/" className="text-base hover:text-primary dark:hover:text-primary text-muted dark:text-darkmuted">
               <Icon icon='mdi:instagram' className='text-base social-icon' />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-lightgray bg-opacity-75 dark:bg-dark">
        <div className='grid grid-cols-12'>
          <div className="border-end text-center col-span-6 border-e border-border dark:border-darkborder">
            <div className=' py-4'>
            <h4 className="fw-normal mb-0 text-lg font-medium text-dark">1099</h4>
            <p className='text-muted font-medium' >Followers</p>
            </div>
          </div>
          <div className="text-center col-span-6">
           <div className=' py-4'>
           <h4 className="fw-normal text-lg mb-0 text-dark font-medium">603</h4>
           <p className='text-muted font-medium' >Following</p>
           </div>
          </div>
        </div>
      </div>
      <div className='p-6 rounded-none'>
        <Button color='success' className="rounded-pill my-2 mb-3 w-fit mx-auto">
          Follow Me
        </Button>
      </div>
    </CardBox>
  );
};

export default ProfileCard;
