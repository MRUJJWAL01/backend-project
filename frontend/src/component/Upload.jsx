import React, { useState } from "react";
import Navigation from "../literals/Navigation";

const Upload = () => {
  const [audioFile, setAudioFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAudioFile(file);
      console.log("selected File", file);
    }
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!audioFile) {
      alert("Please select an audio file");
      return;
    }
    console.log("clicked");
    
     const formData = new FormData();
    formData.append("audio", audioFile); // 'audio' must match backend field name

    try {
      const res = await fetch("http://localhost:4000/songs", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      console.log("Upload Success:", result);
    } catch (error) {
      console.error("Upload Error:", error);
    }
  };
  return (
    <>
      <div className="h-screen w-full bg-[#121714] text-white ">
        <h1 className=" w-screen p-10 bg-[#121714]  text-center text-3xl font-semibold">
          Upload
        </h1>

        <form onSubmit={handleSubmit} className="w-full max-w-md px-5" action="">
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
      
        <footer>
          <Navigation />
        </footer>
      </div>
    </>
  );
};

export default Upload;
