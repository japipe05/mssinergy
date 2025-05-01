  "use client"
  import SimpleBar from 'simplebar-react';
  import user1 from '/public/images/profile/user-8.jpg';
  import user2 from '/public/images/profile/user-3.jpg';
  import user3 from '/public/images/profile/user-4.jpg';
  import user4 from '/public/images/profile/user-5.jpg';
  import user5 from '/public/images/profile/user-6.jpg';
  import user6 from '/public/images/profile/user-7.jpg';
  import user8 from '/public/images/profile/user-1.jpg';
  import user9 from '/public/images/profile/user-2.jpg';
import CardBox from '../../shared/CardBox';
import Image from 'next/image';
  
  const msgsData = [
    {
      image: user1,
      name: 'Tania Andrew',
      emailid: 'info@wrappixel.com',
      date: '10:20 AM',
      badgetype:"bg-success dark:bg-success",
      id:1,
    },
    {
      image: user2,
      name: 'Bianca Anderson',
      emailid: 'pamela1987@gmail.com',
      date: '11:32 PM',
       badgetype:"bg-error dark:bg-error",
       id:2,
    },
    {
      image: user3,
      name: 'Andrew Johnson',
      emailid: 'cruise1298.fiplip@gmail.com',
      date: '01:00 AM',
       badgetype:"bg-warning dark:bg-warning",
       id:3,
    },
    {
      image: user4,
      name: 'Daniel Kristeen',
      emailid: 'daniel@gmail.com',
      date: '02:45 PM',
      badgetype:"bg-error dark:bg-error",
       id:4,
    },
    {
      image: user5,
      name: 'Mark Strokes',
      emailid: 'pamela1987@gmail.com',
      date: '02:45 PM',
      badgetype:"bg-warning dark:bg-warning",
      id:5,
    },
  
    {
      image: user6,
      name: 'Mark, Stoinus &amp; Rishvi.',
      emailid: 'kat@gmail.com',
      date: '02:45 PM',
      badgetype:"bg-success dark:bg-success",
      id:6,
    },
    {
      image: user1,
      name: 'Mark, Stoinus &amp; Rishvi.',
      emailid: 'kat@gmail.com',
      date: '02:45 PM',
       badgetype:"bg-error dark:bg-error",
       id:7,
    },
    {
      image: user8,
      name: 'Andrew Johnson',
      emailid: 'pamela1987@gmail.com',
      date: '02:45 PM',
       badgetype:"bg-warning dark:bg-warning",
       id:8,
    },
    {
      image: user9,
      name: 'Mark Strokes',
      emailid: 'marta1987@gmail.com',
      date: '02:45 PM',
       badgetype:"bg-error dark:bg-error",
       id:9,
    },
  ];

  interface MyContactProps {
    height:string
  }
  
  const MyContact:React.FC<MyContactProps> = ({height}) => {
    return (
      <CardBox className='mb-0 px-0'>
         <div className="card-title px-6">
         <span className="lstick align-middle inline-block bg-primary"></span>
          My Contact
         </div>
        <SimpleBar style={{ height: `${height}` }} className='px-6'>
          <ul className='contact-group'>
            {msgsData.map((icomment) => (
            <li key={icomment.id}  className='p-0 border-b border-border dark:border-darkborder'>
            <div className="flex items-center gap-3 p-4 pe-0">
              <div
                className={`w-10 h-10 flex relative justify-center items-center shrink-0`}
              >
                <Image src={icomment.image} alt="user" className="shrink-0 rounded-full" />
                <span className={`w-[10px] h-[10px] start-[30px] top-[1px] border-2 border-white ${icomment.badgetype} absolute rounded-full`}></span>
              </div>
              <div className="col-9">
                 <h5 className="mb-0 text-sm text-dark dark:text-white font-semibold">{icomment.name}</h5>
                <span className="text-muted dark:text-muted truncate block text-xs font-semibold">{icomment.emailid}</span>
              </div>
            </div>
          </li>
            ))}
          </ul>
        </SimpleBar>
    
      </CardBox>
    );
  };
  
  export default MyContact;
  