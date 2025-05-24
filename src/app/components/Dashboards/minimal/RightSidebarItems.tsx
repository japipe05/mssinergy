import Image from 'next/image'
import React from 'react'
interface RightMsgItemProps {
    desc:string,
    img:any,
    title:string,
    time:string
}

const RightMsgItem:React.FC<RightMsgItemProps> = ({desc,img,title,time}) => {
  return (
    <div className="msg-item mb-7">
    <div className="msg-body p-3 rounded-md bg-white dark:bg-darkbody dark:text-darkmuted relative font-medium fs-6">
      {desc}
      <span className="down-arrow"></span>
    </div>
    <div className="mt-3 flex">
      <div className="me-3">
        <Image src={img} alt="user" width="40" className="rounded-full"/>
      </div>
      <div className="author">
        <h5 className="mb-0 text-base font-medium">{title}</h5>
        <p className="text-muted dark:text-muted fs-6 font-medium">{`Today ${time} PM`}</p>
      </div>
    </div>
  </div>
  )
}

export default RightMsgItem