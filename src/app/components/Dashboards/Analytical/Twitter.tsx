"use client"

import { Icon } from '@iconify/react/dist/iconify.js';
import CardBox from '../../shared/CardBox';
import Link from 'next/link';

const Twitter = () => {
  return (
      <CardBox className="mb-0 bg-indigo dark:bg-indigo">
        <div className="flex">
          <div className="stats">
            <h1 className="text-white font-medium text-4xl mb-2">3,257+</h1>
            <h6 className="text-white  font-medium text-sm mb-2">Twitter Followers</h6>
            <Link href="/" className="btn-custom-dark px-5 font-medium inline-block py-2 mt-2 fs-6 border-0 rounded-full">
                            Check list
             </Link>
          </div>
          <div className="ms-auto">
          <Icon icon="mdi:twitter" className="text-5xl text-white shrink-0"></Icon>
          </div>
        </div>
     </CardBox>
  );
};

export default Twitter;
