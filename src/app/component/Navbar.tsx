import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex justify-around bg-none absolute top-0 z-20 w-full text-white ">
      <nav className="py-[1rem] w-[80%]">
        <div className="container mx-auto flex justify-between items-center text-[.6rem]">
          <div className="space-x-4">
            <a href="#" className=" text-lg font-semibold">
              <Image
                src="/logo white.png"
                alt=""
                width={500}
                height={500}
                className="w-[7rem]"
              ></Image>
            </a>
          </div>

          <div className="space-x-4">
            <a href="#" className="hover:text-primary">
              About Us
            </a>
            <a href="#" className="hover:text-primary">
              Lowongan
            </a>
            <a href="#" className="hover:text-primary">
              Blog
            </a>
            <a href="#" className="hover:text-primary">
              News
            </a>
            <button className="bg-primary text-white p-[.5rem] rounded-md">
              Contant Us
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
