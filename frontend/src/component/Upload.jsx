import React, { useState } from "react";
import Navigation from "../literals/Navigation";
import MusicPlayer from "../literals/MusicPlayer";

const Upload = () => {
  const [audioFile, setAudioFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAudioFile(file);
      console.log("selected File", file);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!audioFile) {
      alert("Please select an audio file");
      return;
    }
  };
  return (
    <>
      <div className="h-screen w-full bg-[#121714] text-white ">
        <h1 className=" w-screen p-10 bg-[#121714]  text-center text-3xl font-semibold">
          Upload
        </h1>

        <form className="w-full max-w-md px-5" action="">
          <input
            accept="audio/*"
            type="file"
            onChange={handleFileChange}
            className="w-full p-3 rounded bg-[#29382f] text-[#9EB8A8] mb-4 outline-none"
          />
          <button
            type="submit"
            className="w-full bg-[#1db954] text-[#121714] font-bold py-2 rounded hover:bg-[#1aa34a]"
          >
            Submit
          </button>
        </form>
        <div>
               <MusicPlayer />

        </div>

        <footer>
          <Navigation />
        </footer>
      </div>
    </>
  );
};

export default Upload;
