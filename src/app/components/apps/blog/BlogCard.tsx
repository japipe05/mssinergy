'use client'
import { format } from "date-fns";
import { IconEye, IconMessage2, IconPoint } from "@tabler/icons-react";
import { BlogPostType } from "@/app/DashboardLayout/types/apps/blog";
import CardBox from "../../shared/CardBox";
import Link from "next/link";
import Image from "next/image";
import { Avatar, Badge, Tooltip } from "flowbite-react";

interface Btype {
  post: BlogPostType;
  index?: number;
}
const BlogCard = ({ post }: Btype) => {
  const { coverImg, title, view, comments, category, author, createdAt }: any =
    post;
  const linkTo = title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
  return (
    <>
      <div className="lg:col-span-4 md:col-span-6 col-span-12">
        <CardBox className="p-0 overflow-hidden group card-hover">
          <div className="relative">
            <Link href={`/apps/blog/detail/${linkTo}`} >
              <div className="overflow-hidden h-[240px]">
                <Image
                  src={coverImg}
                  alt="materialm"
                  height={240}
                  width={500}
                  className="w-100"
                />
              </div>
              <Badge color={"white"} className="absolute bottom-8 end-6">
                2 min Read
              </Badge>
            </Link>
            <div className="flex justify-between items-center -mt-6 px-6">
              <div>
                <Tooltip content={author?.name} className="">
                  <Avatar img={author?.avatar} rounded />
                </Tooltip>
              </div>
            </div>
          </div>
          <div className="px-6 pb-6">
            <Badge color={"lightmuted"} className="mt-3">
              {category}
            </Badge>
            <h5 className="text-xl py-6 group-hover:text-primary">
              <Link href={`/apps/blog/detail/${linkTo}`} className="line-clamp-2"> {title}</Link>
            </h5>
            <div>
              <div className="flex gap-3">
                <div className="flex gap-2 items-center text-bodyclr dark:text-darkmuted text-[15px]">
                  <IconEye size="18" className="text-dark dark:text-white" /> {view}
                </div>
                <div className="flex gap-2 items-center text-bodyclr dark:text-darkmuted text-[15px]">
                  <IconMessage2 size="18" className="text-dark dark:text-white" /> {comments?.length}
                </div>
                <div className="ms-auto flex gap-2 items-center  text-bodyclr dark:text-darkmuted text-[15px]">
                  <IconPoint size="16" className="text-dark dark:text-white" />
                  <small>{format(new Date(createdAt), "E, MMM d")}</small>
                </div>
              </div>
            </div>
          </div>
        </CardBox>
      </div>
    </>
  );
};

export default BlogCard;
