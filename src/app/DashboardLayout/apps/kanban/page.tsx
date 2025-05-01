import TaskManager from "@/app/components/apps/kanban/TaskManager";
import CardBox from "@/app/components/shared/CardBox";
import { KanbanDataContextProvider } from '@/app/context/kanbancontext/index'
import type { Metadata } from "next";
import ThemeBreadcrumb from "../../layout/shared/breadcrumb/ThemeBreadcrumb";
export const metadata: Metadata = {
  title: "Kanban App",
};


function kanban() {
    return (
        <>
            <KanbanDataContextProvider>
                <ThemeBreadcrumb title="Kanban app"/>
                <CardBox>
                    <TaskManager />
                </CardBox>
            </KanbanDataContextProvider>
        </>
    )
}
export default kanban
