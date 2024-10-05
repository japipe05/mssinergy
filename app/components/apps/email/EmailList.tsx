import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import SimpleBar from "simplebar-react";
import { Badge, Checkbox } from "flowbite-react";
import {
  IconAlertCircle,
  IconStar,
  IconStarFilled,
  IconTrash,
} from "@tabler/icons-react";
import { EmailContext } from '@/app/context/EmailContext/index'
import { formatDistanceToNowStrict } from 'date-fns';

type MailListProps = {
  openMail: Dispatch<SetStateAction<boolean>>; // or specify the exact type of the function
};

const EmailList = ({ openMail }: MailListProps) => {

  const { emails, setSelectedEmail, deleteEmail, filter, toggleStar, toggleImportant, searchQuery } = useContext(EmailContext);
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});
  const [selectedEmailId, setSelectedEmailId] = useState(emails.length > 0 ? emails[0].id : null);



  const handleCheckboxChange = (emailId: number) => {
    setCheckedItems(prevState => ({
      ...prevState,
      [emailId]: !prevState[emailId]
    }));
  };

  const handleDelete = (emailId: number) => {
    deleteEmail(emailId);
  };

  const filteredEmails = searchQuery
    ? emails.filter((email: { from: string; }) =>
      email.from.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : emails.filter((email: { [x: string]: any; starred: any; label: any; }) => {
      if (filter === 'starred') {
        return email.starred;
      } else if (['Promotional', 'Social', 'Health'].includes(filter as string)) {
        return email.label === filter;
      } else {
        return email[filter];
      }
    });

  const handleSelectEmail = (email: any) => {
    setSelectedEmail(email);
    setSelectedEmailId(email.id);
    setCheckedItems({});

  };

  return (
    <>
      <SimpleBar className="max-h-[600px] h-[calc(100vh_-_100px)]">
        <div className="border-right border-color-divider h-full w-320">
          {filteredEmails.map((email) => (
            <div
              key={email.id}
              className={`cursor-pointer  py-4 px-6 gap-3 items-center group bg-hover  ${selectedEmailId === email.id ? 'bg-lighthover dark:bg-darkbody' : ''} `}
            >
              <div className="flex  gap-3">
                <Checkbox className="checkbox"
                  checked={checkedItems[email.id] || false}
                  onChange={() => handleCheckboxChange(email.id)} />
                <div className="w-full">

                  <div className="flex justify-between" onClick={()=>{ handleSelectEmail(email); openMail(true)}}>
                    <h6 className="text-sm group-hover:text-primary">
                      {email.from}
                    </h6>
                    {email.label == "Promotional" ? (
                      <Badge color={"primary"}>{email.label}</Badge>
                    ) : email.label == "Social" ? (
                      <Badge color={"error"}>{email.label}</Badge>
                    ) : email.label == "Health" ? (
                      <Badge color={"success"}>{email.label}</Badge>
                    ) : <Badge color={"primary"}>{email.label}</Badge>}
                  </div>
                  <p className="text-sm  line-clamp-1 mt-2 mb-3">
                    {email.subject}
                  </p>
                  <div className="flex justify-between">
                    <div className="flex gap-2 items-center" >
                      {email.starred ? (
                        <IconStarFilled size="17" className="text-warning"
                          onClick={() => toggleStar(email.id)}
                        />
                      ) : (
                        <IconStar
                          size="17"
                          className="text-dark dark:text-darkmuted"
                          onClick={() => toggleStar(email.id)}
                        />
                      )}

                      <IconAlertCircle
                        size="17"
                        className="text-dark dark:text-darkmuted"
                        onClick={() => toggleImportant(email.id)}
                        style={{ fill: email.important ? '#FFD9E4' : '' }}
                      />
                      {checkedItems[email.id] && <IconTrash size="17"
                        className="text-dark dark:text-darkmuted" onClick={() => handleDelete(email.id)} />}
                    </div>
                    <p className="text-xs  font-medium mt-0.5">{formatDistanceToNowStrict(new Date(email.time), {
                      addSuffix: false,
                    })} ago</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SimpleBar >
    </>
  );
};
export default EmailList;