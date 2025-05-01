
"use client"
import user1 from '/public/images/profile/user-3.jpg';
import user2 from '/public/images/profile/user-4.jpg';
import user3 from '/public/images/profile/user-2.jpg';
import user4 from '/public/images/profile/user-6.jpg';
import user5 from '/public/images/profile/user-5.jpg';
import user6 from '/public/images/profile/user-7.jpg';
import user7 from '/public/images/profile/user-8.jpg';
import user8 from '/public/images/profile/user-9.jpg';
import user9 from '/public/images/profile/user-11.jpg';
import bg1 from '/public/images/blog/blog-img5.jpg';
import bg2 from '/public/images/blog/blog-img6.jpg';
import zipImg from '/public/images/icons/zip.png';
import { Icon } from '@iconify/react/dist/iconify.js';
import CardBox from '../../shared/CardBox';
import { Button, Dropdown } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import SimpleBar from 'simplebar-react';

const Activity = ({height}:{height:string}) => {
  return (
      <CardBox className='mb-0 px-0'>
       <div className="flex items-center mb-6 px-6">
         <div className="card-title">
         <span className="lstick align-middle inline-block bg-primary"></span>
         Activity
         </div>
         <div className="ms-auto mt-3 md:mt-0">
    <Dropdown placement="left-start" label="" dismissOnClick={false} renderTrigger={() => <Icon icon="mage:dots" className='text-muted dark:text-darkmuted text-xl shrink-0 cursor-pointer' />}>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
         </div>
       </div>
       <SimpleBar style={{ height: height }} className='px-6'>
        <div className='analytical-activity z-[3] relative after:absolute after:start-5 after:z-1 after:top-0 after:w-[1px] after:bg-border dark:after:bg-darkborder after:h-full'>
      {/* row 1 */}
      <div className="flex items-start mt-4">
        <span className='relative z-5'>
          <Image src={user1} alt="user-image" className="rounded-full" width="45" />
        </span>
        <div className="ms-4">
          <h5 className="mb-0 font-semibold text-sm text-dark dark:text-white">
            Mark Freeman
            <span className="text-muted dark:text-darkmuted text-sm ms-2">| &nbsp; 6:30 PM</span>
          </h5>
          <h6 className="text-muted dark:text-darkmuted font-medium mb-0">uploaded this file </h6>
          <div className="md:flex items-center mt-4">
            <Image src={zipImg} alt="zipimg" />
            <div className="ms-4">
              <h5 className="mb-0 font-semibold text-dark dark:text-white text-sm">Homepage.zip</h5>
              <p className='mb-0 mt-1'>54 MB</p>
            </div>
          </div>
        </div>
      </div>
      {/* row 2 */}
      <div className="flex align-items-start mt-4">
        <span className='relative z-5 shrink-0'>
          <Image src={user2} alt="user-2" className="rounded-full" width="45" />
        </span>
        <div className="ms-4">
          <h5 className="mb-0 font-semibold text-sm text-dark dark:text-white">
          Emma Smith
            <span className="text-muted dark:text-darkmuted font-medium text-sm ms-2">| &nbsp; 6:30 PM</span>
          </h5>
          <h6 className="text-muted dark:text-darkmuted mb-0 font-medium">joined projectname, and invited{" "}
                <a href="/" className='hover:text-primary text-black dark:hover:text-primary dark:text-white text-decoration-none font-medium'>
                  @maxcage, @maxcage, @maxcage, @maxcage, @maxcage,+3
                </a></h6>
          <div className="mt-4">
            <div className='flex items-center'>
                <Link href='/' className='profile-icon'>
                    <Image src={user3} alt="user3" className="rounded-full relative hover:z-10 transition-all" width="40" />
                </Link>
                <Link href='/' className='-ms-3 profile-icon'>
                    <Image src={user4} alt="user4" className="rounded-full relative hover:z-10 transition-all" width="40" />
                </Link>
                <Link href='/' className='-ms-3 profile-icon text-decoration-none' >
                    <div className='w-10 h-10 btn bg-warning text-white rounded-full relative transition-all hover:z-10 text-base flex items-center justify-center'>C</div>
                </Link>
                <Link href='/' className='-ms-3 profile-icon text-decoration-none'>
                <div className='w-10 h-10 btn bg-error text-white rounded-full relative transition-all hover:z-10 text-base flex items-center justify-center'>C</div>
                </Link>
                <Link href='/' className=' profile-icon text-decoration-none text-black dark:text-white  ms-0 font-medium'>
                   +3
                </Link>
            </div>
          </div>
        </div>
      
      </div>
      {/* row 3 */}
      <div className="flex align-items-start mt-4">
        <span className='relative z-5'>
          <Image src={user5} alt="user-5" className="rounded-full" width="45" />
        </span>
        <div className="ms-3 mt-1">
          <h5 className="mb-0 font-semibold text-sm text-dark">
          David R. Jones 
            <span className="text-muted dark:text-darkmuted font-medium text-sm ms-2">| &nbsp; 9:30 PM, July 13th</span>
          </h5>
          <h6 className="text-muted dark:text-darkmuted mb-0 font-medium">uploaded this file </h6>
          <div className="flex items-center mt-4">
            <Image src={bg1} alt="bg1" className='rounded-md' width="60" />
            <Image src={bg2} alt="bg2" className='rounded-md ms-2' width="60" />
          </div>
        </div>
      </div>
      {/* row 4 */}
      <div className="flex align-items-start mt-4">
        <span className='relative z-5'>
          <Image src={user4} alt="user4" className="rounded-full" width="45" />
        </span>
        <div className="ms-3 mt-1">
          <h5 className="mb-0 font-semibold text-sm text-dark dark:text-white">
          David R. Jones 
            <span className="text-muted dark:text-darkmuted text-sm ms-2 font-medium">| &nbsp; 6:30 PM</span>
          </h5>
          <h6 className="text-muted dark:text-darkmuted mb-0 font-medium">Commented on <span className='text-black font-normal dark:text-white' >Test Project</span></h6>
          <p className='mt-3 font-medium text-muted dark:text-darkmuted'>It has survived not only five centuries, but also the leap into...</p>
        </div>
      </div>
      {/* row 5 */}
      <div className="flex items-start mt-4">
        <span className='relative z-5'>
          <Image src={user6} alt="user-image" className="rounded-full" width="45" />
        </span>
        <div className="ms-4">
          <h5 className="mb-0 font-semibold text-sm text-dark dark:text-white">
            Mark Freeman
            <span className="text-muted dark:text-darkmuted text-sm ms-2">| &nbsp; 6:30 PM</span>
          </h5>
          <h6 className="text-muted dark:text-darkmuted font-medium mb-0">uploaded this file </h6>
          <div className="md:flex items-center mt-4">
            <Image src={zipImg} alt="zipimg" />
            <div className="ms-4">
              <h5 className="mb-0 font-semibold text-dark dark:text-white text-sm">Homepage.zip</h5>
              <p className='mb-0 mt-1'>54 MB</p>
            </div>
          </div>
        </div>
      </div>
      {/* row 6 */}
      <div className="flex align-items-start mt-4">
        <span className='relative z-5 shrink-0'>
          <Image src={user7} alt="user-2" className="rounded-full" width="45" />
        </span>
        <div className="ms-4">
          <h5 className="mb-0 font-semibold text-sm text-dark dark:text-white">
          Emma Smith
            <span className="text-muted dark:text-darkmuted font-medium text-sm ms-2">| &nbsp; 6:30 PM</span>
          </h5>
          <h6 className="text-muted dark:text-darkmuted mb-0 font-medium">joined projectname, and invited{" "}
                <a href="/" className='hover:text-primary text-black dark:hover:text-primary dark:text-white text-decoration-none font-medium'>
                  @maxcage, @maxcage, @maxcage, @maxcage, @maxcage,+3
                </a></h6>
          <div className="mt-4">
            <div className='flex items-center'>
                <Link href='/' className='profile-icon'>
                    <Image src={user3} alt="user3" className="rounded-full relative hover:z-10 transition-all" width="40" />
                </Link>
                <Link href='/' className='-ms-3 profile-icon'>
                    <Image src={user4} alt="user4" className="rounded-full relative hover:z-10 transition-all" width="40" />
                </Link>
                <Link href='/' className='-ms-3 profile-icon text-decoration-none' >
                    <div className='w-10 h-10 btn bg-warning text-white rounded-full relative transition-all hover:z-10 text-base flex items-center justify-center'>C</div>
                </Link>
                <Link href='/' className='-ms-3 profile-icon text-decoration-none'>
                <div className='w-10 h-10 btn bg-error text-white rounded-full relative transition-all hover:z-10 text-base flex items-center justify-center'>C</div>
                </Link>
                <Link href='/' className=' profile-icon text-decoration-none text-black dark:text-white  ms-0 font-medium'>
                   +3
                </Link>
            </div>
          </div>
        </div>
      
      </div>
      {/* row 7 */}
      <div className="flex align-items-start mt-4">
        <span className='relative z-5'>
          <Image src={user9} alt="user-5" className="rounded-full" width="45" />
        </span>
        <div className="ms-3 mt-1">
          <h5 className="mb-0 font-semibold text-sm text-dark">
          David R. Jones 
            <span className="text-muted dark:text-darkmuted font-medium text-sm ms-2">| &nbsp; 9:30 PM, July 13th</span>
          </h5>
          <h6 className="text-muted dark:text-darkmuted mb-0 font-medium">uploaded this file </h6>
          <div className="flex items-center mt-4">
            <Image src={bg1} alt="bg1" className='rounded-md' width="60" />
            <Image src={bg2} alt="bg2" className='rounded-md ms-2' width="60" />
          </div>
        </div>
      </div>
        </div>
        </SimpleBar>
      </CardBox>
  );
};

export default Activity;
