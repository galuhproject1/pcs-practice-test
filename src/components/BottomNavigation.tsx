"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { IoMdListBox } from "react-icons/io";
import { GiEntryDoor } from "react-icons/gi";


type BottomNav = {
    name: string;
    icon: JSX.Element;
    url: string;
}
export default function BottomNav() {
  const [isActive, setIsActive] = useState<string>("Home");
  const pathname = usePathname();

  const pathNow = pathname.split("/")[1];
  console.log(pathNow);

  const Bottom: BottomNav[] = [
    {
      name: "Home",
      icon: <FaHome size={24} />,
      url: ""
    },
    {
      name: "Attendance",
      icon: <FaRegCalendarCheck size={24} />,
      url: "attendance"
    },
    {
      name: "Checkout",
      icon: <GiEntryDoor size={32} />,
      url: "checkout"
    },
    {
      name: "Form",
      icon: <IoMdListBox size={24} />,
      url: "form"
    },
    {
      name: "Settings",
      icon: <FaHome size={24} />,
      url: "settings"
    },
  ];

  return (
    <div
      className="fixed bottom-0 max-w-sm w-full bg-white flex justify-between items-end h-16 px-4 py-2"
      style={{ boxShadow: "0px -4px 4px rgba(0, 0, 0, 0.25)" }}
    >
      {Bottom.map((item, index) => (
        <Link
          href={`/${item.url}`}
          key={item.name}
          className={`flex flex-col items-center justify-center relative w-32 ${item.url === pathNow ? "text-primary" : "text-black"
            }`}
        >
          <div
            className={` ${
              index === 2
                ? "bg-red-500 h-16 w-16 rounded-full flex items-center justify-center absolute -top-16 text-white"
                : "bg-white"
            }`}
          >
            {item.icon}
          </div>
          <p className="text-xs">{item.name}</p>
        </Link>
      ))}
    </div>
  );
}
