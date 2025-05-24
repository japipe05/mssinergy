import {
  IconMicrophone,
  IconMoodSmile,
  IconPaperclip,
  IconPhotoPlus,
  IconSend,
} from "@tabler/icons-react";
import { TextInput } from "flowbite-react";
import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import { ChatContext } from "@/app/context/ChatContext/index";

const ChatMsgSent = () => {
  const { sendMessage, selectedChat } = useContext(ChatContext);
  const [msg, setMsg] = useState<string>("");

  const handleChatMsgChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMsg(e.target.value);
  };

  const onChatMsgSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!msg.trim() || !selectedChat) return;
    sendMessage(selectedChat.id, msg.trim() as any);
    setMsg("");
  };

  return (
    <>
      <form onSubmit={onChatMsgSubmit}>
        <div className="flex gap-3 items-center py-5 px-5">
          <div>
            <div className="btn-circle-hover cursor-pointer">
              <IconMoodSmile stroke={1.5} size="20" />
            </div>
          </div>
          <TextInput
            className="form-control-chat border-0 w-full"
            sizing="md"
            required
            value={msg}
            onChange={handleChatMsgChange}
          />
          <div className="flex gap-3 items-center">
            <div className="btn-circle-hover cursor-pointer ">
              <IconSend
                stroke={1.5}
                size="20"
                onClick={() => {
                  sendMessage(selectedChat?.id || "", msg as any);
                  setMsg("");
                }}
              />
            </div>
            <div className="btn-circle-hover cursor-pointer">
              <IconPhotoPlus stroke={1.5} size="20" />
            </div>
            <div className="btn-circle-hover cursor-pointer">
              <IconPaperclip stroke={1.5} size="20" />
            </div>
            <div className="btn-circle-hover cursor-pointer">
              <IconMicrophone stroke={1.5} size="20" />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ChatMsgSent;
