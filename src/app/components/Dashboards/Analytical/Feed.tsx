"use client"
import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import SimpleBar from 'simplebar-react';
import CardBox from '../../shared/CardBox';

const FeedData = [
  {
    title: 'Cras justo odio',
    icon: 'ph:bell',
    iconbg:"bg-lightindigo dark:bg-lightindigo text-indigo dark:text-indigo dark:hover:bg-indigo hover:bg-indigo hover:text-white dark:hover:text-white",
    iconborder:"border-indigo dark:border-indigo",
    color: 'text-indigo dark:text-indigo',
    date: 'Just Now',
    id: 1,
  },
  {
    title: 'Server #1 overloaded',
    icon: 'material-symbols:database-outline',
    iconbg:"bg-lightsuccess dark:bg-lightsuccess text-success dark:text-success dark:hover:bg-success hover:bg-success hover:text-white dark:hover:text-white",
    iconborder:"border-success dark:border-success",
    color: 'text-success dark:text-success',
    date: '2 Hours ago',
    id: 2,
  },
  {
    title: 'New order received.',
    icon: 'material-symbols:shopping-cart-outline',
    iconbg:"bg-lightwarning dark:bg-lightwarning text-warning dark:text-warning dark:hover:bg-warning hover:bg-warning hover:text-white dark:hover:text-white",
    iconborder:"border-warning dark:border-warning",
    color: 'text-warning dark:text-warning',
    date: '31 May',
    id: 3,
  },
  {
    title: 'New user registered.',
    icon: 'tabler:users',
    iconbg:"bg-lighterror dark:bg-lighterror text-error dark:text-error dark:hover:bg-error hover:bg-error hover:text-white dark:hover:text-white",
    iconborder:"border-error dark:border-error",
    color: 'text-error dark:text-error',
    date: '30 May',
    id: 4,
  },
  {
    title: 'New Version just arrived.',
    icon: 'tabler:users',
    iconbg:"bg-lightprimary dark:bg-lightprimary text-primary dark:text-primary dark:hover:bg-primary hover:bg-primary hover:text-white dark:hover:text-white",
    iconborder:"border-primary dark:border-primary",
    color: 'text-primary dark:text-primary',
    date: '27 May',
    id: 5,
  },
  {
    title: 'You have 4 pending tasks.',
    icon: 'ph:bell',
    iconbg:"bg-lightindigo dark:bg-lightindigo text-indigo dark:text-indigo dark:hover:bg-indigo hover:bg-indigo hover:text-white dark:hover:text-white",
    iconborder:"border-indigo dark:border-indigo",
    color: 'text-indigo dark:text-indigo',
    date: '27 June',
    id: 6,
  },
  {
    title: 'New Version just arrived.',
    icon: 'ph:bell',
    iconbg:"bg-lightprimary dark:bg-lightprimary text-primary dark:text-primary dark:hover:bg-primary hover:bg-primary hover:text-white dark:hover:text-white",
    iconborder:"border-primary dark:border-primary",
    color: 'text-primary dark:text-primary',
    date: '31 May',
    id: 7,
  },
  {
    title: 'New order received.',
    icon: 'material-symbols:shopping-cart-outline',
    iconbg:"bg-lightsuccess dark:bg-lightsuccess text-success dark:text-success dark:hover:bg-success hover:bg-success hover:text-white dark:hover:text-white",
    iconborder:"border-success dark:border-success",
    color: 'text-success dark:text-success',
    date: '31 May',
    id: 8,
  },
];

const Feeds = () => {
  return (
      <CardBox className='mb-0 px-0'>
         <div className="card-title px-6">
         <span className="lstick align-middle inline-block bg-primary"></span>
          Feeds
         </div>
        <SimpleBar style={{ height: '470px' }} className='px-6'>
        <ul className='flex flex-col gap-4 contact-group pt-5'>
          {FeedData.map((feed) => (
            <li
              key={feed.id}
              className={`flex items-center py-0 mb-3.5 px-3 border-s-2 ${feed.iconborder}`}
            >
              <div
                className={`rounded-full me-3 w-10 h-10 flex items-center cursor-pointer ${feed.iconbg}  border-0 justify-center`}
              >
                <Icon icon={feed.icon} className={`text-xl shrink-0 icon`} />
              </div>
              <h6 className="mb-0 text-dark dark:text-darkmuted font-medium">{feed.title}</h6>
              <small className="ms-auto text-muted dark:text-darkmuted font-normal  text-small">{feed.date}</small>
            </li>
          ))}
        </ul>
        </SimpleBar>
      </CardBox>
  );
};

export default Feeds;
