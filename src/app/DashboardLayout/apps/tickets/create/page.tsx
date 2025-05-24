import CreateTicketForm from "@/app/components/apps/tickets/CreateTicketForm";
import type { Metadata } from "next";
import { TicketProvider } from '@/app/context/TicketContext/index'
import ThemeBreadcrumb from "@/app/DashboardLayout/layout/shared/breadcrumb/ThemeBreadcrumb";


export const metadata: Metadata = {
    title: "Ticket App",
};

const CreateTickets = () => {
    return (
        <>
            <ThemeBreadcrumb title="Tickets App" />
            <TicketProvider>
                <CreateTicketForm />
            </TicketProvider>

        </>
    );
};

export default CreateTickets;