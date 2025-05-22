import TicketsApp from "@/app/components/apps/tickets";
import type { Metadata } from "next";
import ThemeBreadcrumb from "../../layout/shared/breadcrumb/ThemeBreadcrumb";
export const metadata: Metadata = {
  title: "Ticket App",
};

const Tickets = () => {
  return (
    <>
      <ThemeBreadcrumb title="Tickets App"  />
      <TicketsApp />
    </>
  );
};

export default Tickets;
