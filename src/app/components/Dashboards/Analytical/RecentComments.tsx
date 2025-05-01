 "use client"
  import SimpleBar from 'simplebar-react';
  
  import user1 from '/public/images/profile/user-5.jpg';
  import user2 from '/public/images/profile/user-6.jpg';
  import user3 from '/public/images/profile/user-3.jpg';
  import user4 from '/public/images/profile/user-4.jpg';
  import user5 from '/public/images/profile/user-2.jpg';
  import { Icon } from '@iconify/react/dist/iconify.js';
  import CardBox from '../../shared/CardBox';
  import Image from 'next/image';
  import { Badge } from 'flowbite-react';
  
  const commentsData = [
    {
      image: user1,
      name: 'James Anderson',
      comment: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
      status: 'Pending',
      date: 'April 14, 2024',
    },
    {
      image: user2,
      name: 'Michael Jorden',
      comment: 'Rpsum is simply dummy text of the printing and type setting industry.',
      status: 'Approved',
      date: 'May 14, 2024',
    },
    {
      image: user3,
      name: 'Johnathan Doeting',
      comment: 'Frem Ipsum is simply dummy text of the printing and type setting industry.',
      status: 'Approved',
      date: 'June 14, 2024',
    },
    {
      image: user4,
      name: 'Daniel Kristeen',
      comment: 'LorTsum is simply dummy text of the printing and type setting industry.',
      status: 'Pending',
      date: 'July 14, 2024',
    },
    {
      image: user5,
      name: 'Jan Petrovic',
      comment: 'Mem Ipsum is simply dummy text of the printing and type setting industry.',
      status: 'Rejected',
      date: 'Aug 14, 2024',
    },
    {
      image: user1,
      name: 'Hanna Gover',
      comment: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
      status: 'Pending',
      date: 'April 14, 2024',
    },
  ];
  
  const RecentComments = () => {
    return (
        <>
        <CardBox className='p-0'>
         <div className="p-6">
         <div className="card-title">
         <span className="lstick align-middle inline-block bg-primary"></span>
          Recent Comments
         </div>
         </div>
         <SimpleBar style={{ height: '645px' }}>
          <ul className=' rounded-0'>
            {commentsData.map((icomment) => (
              <li
                key={icomment.name}
                className="flex py-4 gap-2 px-4 w-full group  border-b last:border-b-0 border-border dark:border-darkborder bg-hover"
              >
                <div className='p-2'>
                  <Image src={icomment.image} alt="user" width="40" className="rounded-full me-3" />
                </div>
                <div className="w-full p-4 pt-2">
                  <div className="font-medium text-base text-dark dark:text-white mb-0">
                    {icomment.name}
                  </div>
                  <div className="mt-1 mb-4 text-muted dark:text-darkmuted font-medium text-sm">{icomment.comment}</div>
                  <div className="flex items-center gap-3">
                    <div>
                      {icomment.status === 'Pending' ? (
                        <Badge color="lightprimary" className='font-normal py-0 text-[10px]'>Pending</Badge>
                      ) : icomment.status === 'Rejected' ? (
                        <Badge color="lighterror" className='font-normal py-0 text-[10px]' >Rejected</Badge>
                      ) : (
                        <Badge color="lightsuccess" className='font-normal py-0 text-[10px]'>Approved</Badge>
                      )}
                    </div>
                    <div className="flex gap-3 opacity-0 group-hover:opacity-100">
                       <Icon icon='solar:gallery-edit-line-duotone' className='text-xl cursor-pointer shrink-0 dark:text-darkmuted hover:text-primary dark:hover:text-primary' />
                       <Icon icon='solar:check-square-line-duotone' className='text-xl cursor-pointer shrink-0 dark:text-darkmuted hover:text-indigo dark:hover:text-indigo' />
                       <Icon icon='solar:heart-linear' className='text-xl cursor-pointer shrink-0 dark:text-darkmuted hover:text-error dark:hover:text-error' />
                    </div>
                    <small className="ms-auto dark:text-darkmuted">{icomment.date}</small>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </SimpleBar>
        </CardBox>

        </>
    );
  };
  
  export default RecentComments;
  