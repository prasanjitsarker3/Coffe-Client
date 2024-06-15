import clsx from "clsx";
import NextLink from "next/link";
import React from "react";

interface Props {
  title: string;
  icon: React.ReactNode;
  isActive?: boolean;
  href?: string;
}

export const SidebarItem = ({ icon, title, isActive, href = "" }: Props) => {
  const handleClick = () => {
    if (window.innerWidth < 768) {
      // setCollapsed();
    }
  };
  return (
    <NextLink
      href={href}
      className="text-default-900 active:bg-none max-w-full"
    >
      <div
        className={clsx(
          isActive
            ? "bg-blue-600 text-white [&_svg_path]:fill-primary-500"
            : "hover:bg-default-100 text-default-900",
          "flex gap-2 w-full min-h-[44px] h-full items-center px-3.5 rounded-xl cursor-pointer transition-all duration-150 active:scale-[0.98]"
        )}
        onClick={handleClick}
      >
        {icon}
        <span className="">{title}</span>
      </div>
    </NextLink>
  );
};
