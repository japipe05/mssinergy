"use client"

import React from 'react';
import blog1 from '/public/images/blog/blog-img8.jpg';
import CardBox from '../../shared/CardBox';
import Image from 'next/image';
import { Badge } from 'flowbite-react';
import Link from 'next/link';
import { Icon } from '@iconify/react/dist/iconify.js';


const Blog = () => {
  return (
    /*--------------------------------------------------------------------------------*/
    /* Blog                                                 */
    /*--------------------------------------------------------------------------------*/

    <div className='mb-0'>

      <CardBox className='p-0 overflow-hidden'>
      <Image src={blog1} alt="blog1" className="max-w-full" /> 
 <div className='p-6'>
 <h3 className='card-title text-21 mb-2' >Business development of rules 2024</h3>
        <Badge color='primary'>Technology</Badge>
        <p className=" font-medium mt-4 fs-6 dark:text-darkmuted text-graysubtle">Titudin venenatis ipsum aciat. Vestibu ullamer quam. nenatis ipsum ac feugiat. Ibulum ullamcorper venenatis ipsum aciat ipsum aciat. Titudin venenatis ipsum aciat</p>
        <div className='flex items-center mt-4 pt-1'>
            <Link href='/' className='text-decoration-none text-dark dark:text-white hover:text-primary dark:hover:text-primary font-medium'>Read more</Link>
            <div className='ms-auto gap-2 flex items-center'>
            <Link href='/' className='text-decoration-none text-dark dark:text-white hover:text-primary dark:hover:text-primary'><Icon icon="solar:heart-bold" className='text-lg' /></Link>
            <Link href='/' className='text-decoration-none text-dark dark:text-white hover:text-primary dark:hover:text-primary ms-2'><Icon icon="solar:share-bold" className='text-base' /></Link>
            </div>
        </div>
 </div>
        </CardBox>
    </div>
  );
};

export default Blog;
