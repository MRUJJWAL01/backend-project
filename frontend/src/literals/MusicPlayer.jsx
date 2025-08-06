import React from "react";
import { IoPlay } from "react-icons/io5";
import cover from "../../public/cover.jpg";

const MusicPlayer = () => {
  return (
      <div className="flex  items-center gap-5 bg-[#29382F] fixed bottom-28 w-full rounded-2xl p-4 mt-20  ">
        {/* Cover Image */}
        <img
          src={cover}
          alt="Cover"
          className="h-20 rounded-2xl w-20 object-cover "
        />

        {/* Song Info and Play Button */}
        <div className="flex justify-between items-center w-full">
          <div>
            <h2 className="text-md font-medium">Ho Hey</h2>
            <p className="text-sm text-[#9EB8A8]">Honey Singh</p>
          </div>
          <span className="w-[35px] h-[35px] bg-[#38E07B] rounded-full flex items-center justify-center ">
            <IoPlay className="text-lg cursor-pointer text-[#111714]" />
          </span>
        </div>
      </div>
  );
};

export default MusicPlayer;
