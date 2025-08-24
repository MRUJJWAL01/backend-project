import React, { useRef, useState } from "react";
import axios from "axios";
import Navigation from "../literals/Navigation";

import cover from "../../public/cover.jpg";
import MusicPlayer from "../literals/MusicPlayer";
import { useEffect } from "react";
import { Play, Pause } from "lucide-react";
const Home = () => {
  const [songs, setSongs] = useState([]);
  const [playedsong, setplayedsong] = useState(null);

  const getData = async () => {
    const response = await axios.get("http://localhost:3000/songs");
    setSongs(response.data.song);
  };
  const audioRef = useRef(null);
  const [currentsongplay, setcurrentsongplay] = useState(null);
  const togglePlay = (song) => {};
  const [singleSong, setsingleSong] = useState(null)

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="relative h-screen w-full bg-[#121714] text-white">
        {/* App Title */}
        <h1 className=" fixed   w-screen pt-2 pb-4 bg-[#121714] top-0  left-1/2 -translate-x-1/2 text-center text-3xl font-semibold">
          MyTunes
        </h1>

        {/* Song Card Container */}
        <div className="flex flex-col gap-5 bg-[#121714] px-5 pt-20 overflow-y-auto">
          {songs &&
            songs.map((song, index) => (
            
              <div key={index} className="flex items-center gap-5">
                {/* Cover Image */}
                <img
                  src={song.imageUrl}
                  alt="Cover"
                  className="h-20 w-20 object-cover rounded"
                />

                {/* Song Info and Play Button */}
                <div className="flex justify-between items-center w-full">
                  <div>
                    <h2 className="text-md font-medium">{song.title}</h2>
                    <h2 className="text-sm text-[#9EB8A8]">
                      {song.releaseDate}
                    </h2>
                    <p className="text-sm text-[#9EB8A8]">{song.artist}</p>
                  </div>

              { currentsongplay === song._id &&   <audio
                    style={{ display: "none" }}
                    src={song.audioUrl}
                    controls
                    autoPlay
                    playsInline
                  />}
                  <button
                    className=""
                    onClick={() => {
                      if(currentsongplay=== song._id){
                        setcurrentsongplay(null);
                        return;
                      }
                      setcurrentsongplay(song._id);
                      setplayedsong(song);
                      
                    
                      
                      
                    }}
                  >
                    {currentsongplay === song._id ? (
                      <Pause className="text-3xl cursor-pointer" />
                    ) : (
                      <Play className="text-3xl cursor-pointer" />
                    )}
                  </button>
                </div>
              </div>
              
            ))}
        </div>
      </div>
      <section>
        <MusicPlayer song={playedsong} currentsongplay={currentsongplay} />
      </section>
      <footer className="text-white ">
        {/* Navigation bar  */}
        <Navigation />
      </footer>
    </>
  );
};

export default Home;
