"use client"
// import { Input, Table } from 'reactstrap';
import Image from 'next/image';
import CardBox from '../../shared/CardBox';
import user1 from '/public/images/profile/user-1.jpg';
import user2 from '/public/images/profile/user-2.jpg';
import user3 from '/public/images/profile/user-3.jpg';
import user4 from '/public/images/profile/user-4.jpg';
import user5 from '/public/images/profile/user-5.jpg';
import { Badge, Select, Table } from 'flowbite-react';
import SimpleBar from 'simplebar-react';
// import DashCard from '../dashboardCards/DashCard';

const tableData = [
  {
    isActive: 'active',
    avatar: user1,
    name: 'Hanna Gover',
    post: 'Web Designer',
    project: 'Flexy React',
    status: 'Low',
  },
  {
    isActive: '',
    avatar: user2,
    name: 'Daniel Kristeen',
    post: 'Project Manager',
    project: 'Lading pro React',
    status: 'Medium',
  },
  {
    isActive: '',
    avatar: user3,
    name: 'Julian Josephs',
    post: 'Developer',
    project: 'Elite React',
    status: 'High',
  },
  {
    isActive: '',
    avatar: user4,
    name: 'Jan Petrovic',
    post: 'Frontend Eng',
    project: 'Flexy React',
    status: 'Low',
  },
  {
    isActive: '',
    avatar: user5,
    name: 'Steve Gover',
    post: 'Content Writer',
    project: 'Ample React',
    status: 'Medium',
  },
  {
    isActive: '',
    avatar: user1,
    name: 'Johnathan',
    post: 'Graphic',
    project: 'Monster React',
    status: 'Low',
  },
  {
    isActive: '',
    avatar: user5,
    name: 'John Gover',
    post: 'Ethical Hacker',
    project: 'Lading pro React',
    status: 'High',
  },
];

const ProjectMonth = () => {
  return (
    <CardBox className='mb-0 px-0'
    >
        <div className="md:flex items-center mb-6 px-6">
         <div className="card-title">
         <span className="lstick align-middle inline-block bg-primary"></span>
         Projects of the Month
         </div>
         <div className="ms-auto mt-3 md:mt-0">
           <Select required className="select-md rounded-none ">
               <option className='select-option' >January 2024</option>
               <option className='select-option' >February 2024</option>
               <option className='select-option' >March 2024</option>
               <option className='select-option' >April 2024</option>
           </Select>
         </div>
       </div>
       <SimpleBar style={{ height: '586px' }} className='px-6'>
        <div className="overflow-x-auto">
        <Table className='text-nowrap'>
          <Table.Head>
            <Table.HeadCell className="text-sm py-3">
              Assigned
            </Table.HeadCell>
            <Table.HeadCell className="text-sm py-3">
              Name
            </Table.HeadCell>
            <Table.HeadCell className="text-sm py-3">
              Priority
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y divide-border dark:divide-darkborder ">
            {tableData.map((tdata, index) => (
              <Table.Row key={index}>
                <Table.Cell className="whitespace-nowrap">
                <div className="flex items-center">
                    <Image
                      src={tdata.avatar}
                      className="rounded-full"
                      alt="avatar"
                      width="45"
                      height="45"
                    />
                    <div className="ms-3">
                      <h6 className="mb-0 font-semibold">{tdata.name}</h6>
                      <span className="text-muted dark:text-darkmuted text-xs font-medium fs-7">{tdata.post}</span>
                    </div>
                  </div>
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap">
                  <p className="font-medium text-sm dark:text-darkmuted">{tdata.project}</p>
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap">
                  {tdata.status === 'Low' ? (
                    <Badge color="error">{tdata.status}</Badge>
                  ) : tdata.status === 'Medium' ? (
                    <Badge color={"primary"}>{tdata.status}</Badge>
                  ) : (
                    <Badge color={"success"}>{tdata.status}</Badge>
                  )}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        </div>
        </SimpleBar>
    </CardBox>
  );
};

export default ProjectMonth;
