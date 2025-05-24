import ChatsApp from "@/app/components/apps/chat";
import type { Metadata } from "next";
import ThemeBreadcrumb from "../../layout/shared/breadcrumb/ThemeBreadcrumb";
export const metadata: Metadata = {
  title: "Chat App",
};

const Chats = () => {
  return (
    <>
      <ThemeBreadcrumb title="Chat App" />
      <ChatsApp />
    </>
  );
};

export default Chats;
