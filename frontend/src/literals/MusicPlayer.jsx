import React, { useState } from "react";
import { IoPlay } from "react-icons/io5";
import cover from "../../public/cover.jpg";
import { Play, Pause } from "lucide-react";

const MusicPlayer = ({ song, currentsongplay }) => {

    
  return (
    song && (
      <div className="flex  items-center gap-5 bg-[#29382F] fixed bottom-28 w-full rounded-2xl p-4 mt-20  ">
        {/* Cover Image */}
        <img
          src={song.imageUrl}
          alt="Cover"
          className="h-20 rounded-2xl w-20 object-cover "
        />

        {/* Song Info and Play Button */}
        <div className="flex justify-between items-center w-full">
          <div>
            <h2 className="text-md font-medium text-amber-50">{song.title}</h2>
            <h2 className="text-sm text-[#9EB8A8]">{song.releaseDate}</h2>
            <p className="text-sm text-[#9EB8A8]">{song.artist}</p>
          </div>
          <span   onClick={() => {
                      if(currentsongplay === song._id){
                        currentsongplay = null;
                        return;
                      }
                      console.log(currentsongplay);
                      
                    }}
           
            className="w-[45px] h-[45px] bg-[#38E07B] rounded-full flex items-center justify-center "
          >
            {currentsongplay === song._id ? (
              <Pause className="text-lg cursor-pointer text-[#111714]" />
            ) : (
              <Play className="text-lg cursor-pointer text-[#111714]" />
            )}
          </span>
        </div>
      </div>
    )
  );
};

export default MusicPlayer;
