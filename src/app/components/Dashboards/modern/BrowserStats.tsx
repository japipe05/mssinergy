"use client"
import React from 'react';
import SimpleBar from 'simplebar-react';

import img1 from '/public/images/browser/chrome-logo.png';
import img2 from '/public/images/browser/safari-logo.png';
import img3 from '/public/images/browser/firefox-logo.png';
import img4 from '/public/images/browser/uc-logo.png';
import img5 from '/public/images/browser/edge-logo.png';
import CardBox from '../../shared/CardBox';
import Image from 'next/image';
import { Badge } from 'flowbite-react';


const browseData = [
  {
    title: 'Google Chrome',
    img: img1,
    earn: '23',
    id: 1,
  },
  {
    title: 'Apple Safari',
    img: img2,
    earn: '15',
    id: 2,
  },
  {
    title: 'Mozila Firefox',
    img: img3,
    earn: '07',
    id: 3,
  },
  {
    title: 'UC Browser',
    img: img4,
    earn: '09',
    id: 4,
  },
  {
    title: 'Edge Browser',
    img: img5,
    earn: '23',
    id: 5,
  },
  {
    title: 'Google Chrome',
    img: img1,
    earn: '09',
    id: 6,
  },
  {
    title: 'Apple Safari',
    img: img2,
    earn: '12',
    id: 7,
  },
];

const BrowserStats = () => {
  return (
    <CardBox className='mb-0 px-0'>
         <div className="card-title px-6 mb-3">
         <span className="lstick align-middle inline-block bg-primary"></span>
          Browser Stats
         </div>
      <SimpleBar style={{ height: '460px' }} className="px-6" >
        <ul>
          {browseData.map((bdata) => (
            <li
              key={bdata.id}
              className="flex items-center py-3 mb-2.5 border-0"
            >
              <Image src={bdata.img} alt="browser-image" className="rounded-full" width="35" />
              <h5 className="ms-3 mb-0 text-sm dark:text-darkmuted font-medium">{bdata.title}</h5>
              <div className="ms-auto">
                <span className='font-medium text-body dark:text-darkmuted'>
                </span>
                <Badge color='lightgraysubtle' >
                {bdata.earn}%
                </Badge>
              </div>
            </li>
          ))}
        </ul>
      </SimpleBar>
    </CardBox>
  );
};

export default BrowserStats;
