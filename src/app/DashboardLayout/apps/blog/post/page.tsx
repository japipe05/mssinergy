
import ThemeBreadcrumb from "@/app/DashboardLayout/layout/shared/breadcrumb/ThemeBreadcrumb";
import BlogPost from "@/app/components/apps/blog/BlogPost";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Post",
};
const Blog = () => {
  return (
    <>
     <ThemeBreadcrumb title="Blog app" />
     <BlogPost/>
    </>
  );
};
export default Blog;
