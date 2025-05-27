"use client";
import React from "react";
import Blog from "@/app/components/apps/blog/blog";
import { BlogProvider } from "@/app/context/BlogContext/index";

const CrearPost = () => {
  return (
    <>
       <BlogProvider>
        <Blog />
      </BlogProvider>
    </>
  )
}

export default CrearPost
