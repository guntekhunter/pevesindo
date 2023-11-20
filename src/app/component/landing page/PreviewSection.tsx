import React from "react";
import Header from "../Header";

export default function PreviewSection() {
  return (
    <section className="w-full py-[2rem] bg-black overflow-hidden">
      <div className="w-full flex justify-center mb-[2rem]">
        <Header className="text-white font-light">Foto Pengaplikasian</Header>
      </div>
      <div className="overflow-hidden flex justify-center">
        <div className="flex overflow-x-scroll space-x-[2rem] w-[90vw] px-[2rem] pb-[2rem] text-white scrollbar-thin scrollbar-track-[#262626] scrollbar-thumb-white">
          <div className="py-[2rem]">
            <p>01</p>
            <div
              className="bg-cover bg-right h-[17rem] w-[13rem] relative"
              style={{ backgroundImage: 'url("/hero.jpg")' }}
            />
          </div>
          <div>
            <p>02</p>
            <div
              className="bg-cover bg-right h-[20rem] w-[15rem] relative"
              style={{ backgroundImage: 'url("/hero.jpg")' }}
            />
          </div>
          <div className="py-[2rem]">
            <p>03</p>
            <div
              className="bg-cover bg-right h-[17rem] w-[13rem] relative"
              style={{ backgroundImage: 'url("/hero.jpg")' }}
            />
          </div>
          <div>
            <p>04</p>
            <div
              className="bg-cover bg-right h-[20rem] w-[15rem] relative"
              style={{ backgroundImage: 'url("/hero.jpg")' }}
            />
          </div>
          <div className="py-[2rem]">
            <p>03</p>
            <div
              className="bg-cover bg-right h-[17rem] w-[13rem] relative"
              style={{ backgroundImage: 'url("/hero.jpg")' }}
            />
          </div>
          <div>
            <p>04</p>
            <div
              className="bg-cover bg-right h-[20rem] w-[15rem] relative"
              style={{ backgroundImage: 'url("/hero.jpg")' }}
            />
          </div>
          <div className="py-[2rem]">
            <p>03</p>
            <div
              className="bg-cover bg-right h-[17rem] w-[13rem] relative"
              style={{ backgroundImage: 'url("/hero.jpg")' }}
            />
          </div>
          <div>
            <p>04</p>
            <div
              className="bg-cover bg-right h-[20rem] w-[15rem] relative"
              style={{ backgroundImage: 'url("/hero.jpg")' }}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-[2rem]">
        <button className="text-white text-center border-b-[1px]">
          Lihat Katalog
        </button>
      </div>
    </section>
  );
}
