
import NotesApp from "@/app/components/apps/notes";
import type { Metadata } from "next";
import ThemeBreadcrumb from "../../layout/shared/breadcrumb/ThemeBreadcrumb";
export const metadata: Metadata = {
  title: "Notes App",
};
const Notes = () => {

  return (
    <>
        <ThemeBreadcrumb title="Notes app"/>
        <NotesApp/>
    </>
  );
};

export default Notes;
