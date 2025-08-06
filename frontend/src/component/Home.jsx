import React from "react";
import { IoPlayOutline } from "react-icons/io5";

import Navigation from "../literals/Navigation";

import cover from "../../public/cover.jpg";
import MusicPlayer from "../literals/MusicPlayer";

const Home = () => {
  return (
    <>
      <div className="relative h-screen w-full bg-[#121714] text-white">
        {/* App Title */}
        <h1 className=" fixed   w-screen pt-2 pb-4 bg-[#121714] top-0  left-1/2 -translate-x-1/2 text-center text-3xl font-semibold">
          MyTunes
        </h1>

        {/* Song Card Container */}
        <div className="flex flex-col gap-5 bg-[#121714] px-5 pt-20 overflow-y-auto">
          <div className="flex items-center gap-5">
            {/* Cover Image */}
            <img
              src={cover}
              alt="Cover"
              className="h-20 w-20 object-cover rounded"
            />

            {/* Song Info and Play Button */}
            <div className="flex justify-between items-center w-full">
              <div>
                <h2 className="text-md font-medium">Ho Hey</h2>
                <p className="text-sm text-[#9EB8A8]">Honey Singh</p>
              </div>
              <IoPlayOutline className="text-3xl cursor-pointer" />
            </div>
          </div>

          
          
          
        </div>
      </div>
      <section >
        <MusicPlayer />
      </section>
        <footer className="text-white ">
          {/* Navigation bar  */}
          <Navigation />
        </footer>
      
    </>
  );
};

export default Home;
