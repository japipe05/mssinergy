"use client"
import React, { useState } from 'react';
import SimpleBar from 'simplebar-react';

import user1 from '/public/images/profile/user-5.jpg';
import user2 from '/public/images/profile/user-2.jpg';
import user3 from '/public/images/profile/user-3.jpg';
import user4 from '/public/images/profile/user-4.jpg';
import { Icon } from '@iconify/react/dist/iconify.js';
import Image from 'next/image';
import { Badge, Button, Checkbox, Label, Modal, Select, TextInput } from 'flowbite-react';
import CardBox from '../../shared/CardBox';

interface TaskListProps {
  height:string
}

const TaskList:React.FC<TaskListProps> = ({height}) => {

  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');

  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
  }

  const [todos, setTodos] = useState([
    {
      id: "1",
      content: 'Schedule meeting with',
      completed: false,
      labelname: 'Today',
      labelcolor: 'error',
      checkboxbg:"bg-lighterror dark:bg-lighterror",
      checkedbg:"bg-error dark:bg-error",
      usernumber:4,
      isDate:false,
      time: '26 jun 2024',
    },
    {
      id: "2",
      content: 'Give Purchase report to',
      completed: false,
      labelname: '1 week',
      labelcolor: 'indigo',
      checkedbg:"bg-indigo dark:bg-indigo",
      checkboxbg:"bg-lightindigo dark:bg-lightindigo",
      usernumber:2,
      isDate:false,
      time: '26 jun 2024',
    },
    {
      id: "3",
      content: 'Book flight for holiday',
      completed: false,
      labelname: 'Yesterday',
      checkboxbg:"bg-lightprimary dark:bg-lightprimary",
      checkedbg:"bg-primary dark:bg-primary",
      labelcolor: 'primary',
      usernumber:0,
      isDate:true,
      time: '26 jun 2024',
    },
    {
      id: "4",
      content: 'Forward all tasks',
      completed: false,
      labelname: '2 weeks',
      labelcolor: 'warning',
      checkedbg:"bg-warning dark:bg-warning",
      checkboxbg:"bg-lightwarning dark:bg-lightwarning",
      usernumber:0,
      isDate:true,
      time: '26 jun 2024',
    },
    {
      id: "5",
      content: 'Recieve shipment',
      completed: false,
      labelname: 'Today',
      labelcolor: 'success',
      checkedbg:"bg-success dark:bg-success",
      checkboxbg:"bg-lightsuccess dark:bg-lightsuccess",
      usernumber:3,
      isDate:false,
      time: '26 jun 2024',
    },
  ]);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const Avatars=[
    {key:"user1",img:user1},
    {key:"user2",img:user2},
    {key:"user3",img:user3},
    {key:"user4",img:user4},
  ] 

  const toggleComplete = (todoId:any) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) todo.completed = !todo.completed;
        return todo;
      }),
    );
  };

  const deleteTodo = (todoId:any) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };


  return (
    <CardBox className='mb-0 px-0'>
        <div className="flex items-center mb-6 px-6">
         <div className="card-title">
         <span className="lstick align-middle inline-block bg-primary"></span>
         To Do List
         </div>
         <div className="ms-auto mt-3 md:mt-0">
          {/* Modal Started */}
          <Button
            onClick={() => setOpenModal(true)}
            color="success"
            className='w-10 h-10 rounded-circle flex justify-center items-center'
          >
            <Icon icon='ic:baseline-plus' className='text-xl' />
          </Button>
          <Modal dismissible show={openModal} size="md" onClose={() => setOpenModal(false)} className='rounded-md' >
          <div className="flex justify-between p-6">
            <h3 className='text-dark dark:text-white text-lg font-medium' >Add Task</h3>
            <Icon icon="iconamoon:close-fill" onClick={() => setOpenModal(false)}  className='text-3xl cursor-pointer shrink-0 text-muted dark:text-darkmuted' />
          </div>
        <Modal.Body className="pt-0 "  >
        <form className="flex flex-col gap-4">
      <div>
        <div className="mb-0.5 block">
          <Label htmlFor="text1" className='text-muted font-medium text-sm dark:text-darkmuted' value="Task name" />
        </div>
        <TextInput id="text1" type="text" placeholder="Enter Task Name" className="form-control w-full" required />
      </div>
      <div>
        <div className="mb-0.5 block">
          <Label htmlFor="countries" className='text-muted font-medium text-sm dark:text-darkmuted' value="Assign to" />
        </div>
        <Select id="countries" className='text-muted select-md dark:text-darkmuted' required>
        <option className='dark:text-darkmuted select-option' >United States</option>
        <option className='dark:text-darkmuted select-option' >Canada</option>
      </Select>
      </div>
      <div className="flex gap-2 justify-end mt-6">
      <Button color="secondary" type="submit" className='w-fit' >Close</Button>
      <Button color="success" type="submit" className='w-fit' >Submit</Button>
      </div>
    </form>
        </Modal.Body>
      </Modal>
          {/* Modal Ends */}
         </div>
       </div>
        <SimpleBar style={{ height: `${height}` }} className='px-6'>
    <div className="todo-widget">
      <ul className="list-task todo-list list-group mb-0 ps-0">
        {todos.map((todo) => (
                <li
                  className={`list-group-item todo-item border-0 flex ps-0 py-3 ${
                    todo.completed ? 'completed' : ''
                  }`}
                  key={todo.id}
                >
                  <div>
                    <div className='flex gap-2'>
                    <div className="form-check flex gap-1 items-center">
                     <Checkbox className={`border-0 ${todo.checkboxbg} me-2 h-[18px] w-[18px] outline-0 focus:ring-0 focus:ring-offset-0`} id={todo.id} color={`${todo.labelcolor}`} />
                      <label className="form-check-label todo-label font-normal leading-none" htmlFor={todo.id}>
                        <span className="todo-desc leading-none text-dark dark:text-white font-semibold">{todo.content}</span>
                      </label>
                    </div>
                    <Badge color={todo.labelcolor} className='rounded-full text-xs self-start'>{todo.labelname}</Badge>
                    </div>
                    <ul className="assignedto list-style-none m-0 ps-7 ms-1 mt-1">
                       {todo.isDate?<div className="text-xs text-dark dark:text-white font-medium ps-0 d-inline-block ms-0">
                          26 jun 2024
                        </div>:
                        Avatars.slice(0,todo.usernumber).map((item)=>{
                        return (
                          <li key={item.key} className="inline-block border-0 me-2">
                          <Image src={item.img} alt="user" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-original-title="Steave" className="rounded-full" width={30} />
                        </li>
                        )
                       })}
                        </ul>
                  </div>
                </li>
              ))}
      </ul>
          </div>
        </SimpleBar>
    </CardBox>
  );
};

export default TaskList;
