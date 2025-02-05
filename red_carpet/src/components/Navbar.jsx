"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignHorizontalJustifyCenter, AlignRight } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex w-[95vw] justify-between items-center p-2">
      <div>
        <Image src="/logo.png" alt="logo" width={50} height={50} />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger className="border border-neutral-500 rounded-md p-1">
          {" "}
          <AlignRight />{" "}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-black text-white p-2">
          <DropdownMenuItem>Login</DropdownMenuItem>
          <hr className=" border-neutral-500 border-1" />
          <DropdownMenuItem>Home</DropdownMenuItem>
          <hr className=" border-neutral-500 border-1" />
          <DropdownMenuItem>Results</DropdownMenuItem>
          <hr className=" border-neutral-500 border-1" />
          <DropdownMenuItem>Vote</DropdownMenuItem>
          <hr className=" border-neutral-500 border-1" />
          <DropdownMenuItem>Profile</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Navbar;
