// import React, { useState } from "react";
// import Navigation from "../literals/Navigation";

// const Upload = () => {
//   const [audioFile, setAudioFile] = useState(null);

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setAudioFile(file);
//     }
//   };
//   const handleSubmit = async(e) => {
//     e.preventDefault();
//     if (!audioFile) {
//       alert("Please select an audio file");
//       return;
//     }

//      const formData = new FormData();
//     formData.append("audio", audioFile); // 'audio' must match backend field name

//     try {
//       const res = await fetch("http://localhost:3000/songs", {
//         method: "POST",
//         body: formData,
//       });

//       const result = await res.json();
//       console.log("file uploaded successfully");
//       alert("✅ Audio uploaded successfully!");
//       setFile(null); // reset file
//       e.target.reset(); // reset form

//     } catch (error) {
//       console.error("Upload Error:", error);
//     }
//   };
//   return (
//     <>
//       <div className="h-screen w-full bg-[#121714] text-white ">
//         <h1 className=" w-screen p-10 bg-[#121714]  text-center text-3xl font-semibold">
//           Upload
//         </h1>

//         <form onSubmit={handleSubmit} className="w-full max-w-md px-5" action="">
//           <input
//             accept="audio/*"
//             type="file"
//             onChange={handleFileChange}
//             className="w-full p-3 rounded bg-[#29382f] text-[#9EB8A8] mb-4 outline-none"
//           />
//           <button
//             type="submit"
//             className="w-full bg-[#1db954] text-[#121714] font-bold py-2 rounded hover:bg-[#1aa34a]"
//           >
//             Submit
//           </button>
//         </form>

//         <footer>
//           <Navigation />
//         </footer>
//       </div>
//     </>
//   );
// };

// export default Upload;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Upload.css";
import Navigation from "../literals/Navigation";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [success, setSuccess] = useState(false);

  function handleSelect(e) {
    setSuccess(false);
    setProgress(0);
    const f = e.target.files[0];
    if (!f) {
      setFile(null);
      return;
    }
    if (!f.type.startsWith("audio/")) {
      setError("Please select a valid audio file");
      setFile(null);
      return;
    }
    setError("");
    setFile(f);
  }

  async function handleUpload(e) {
    e.preventDefault();
    if (!file || uploading) return;
    setError("");
    setUploading(true);
    setProgress(0);
    try {
      const formData = new FormData();
      formData.append("audio", file);

      const result = await axios.post("http://localhost:3000/songs", formData);


      setSuccess(true);
      setFile(null);
      setProgress(100);
    } catch (err) {
      console.error(err);
      setError(err?.response?.data?.message || "Upload failed");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="upload-container">
      <h1 className=" w-screen p-10   text-center text-5xl font-semibold">
        Upload
      </h1>
      <form className="upload-card" onSubmit={handleUpload}>
        <label className={`dropzone ${file ? "has-file" : ""}`}>
          <input
            type="file"
            accept="audio/*"
            onChange={handleSelect}
            disabled={uploading}
          />
          {!file && (
            <>
              <svg viewBox="0 0 24 24" className="dz-icon">
                <path
                  fill="currentColor"
                  d="M12 3l4.2 4.2-1.4 1.4L13 6.8V16h-2V6.8L9.2 8.6 7.8 7.2 12 3zm-6 14h12v2H6v-2z"
                />
              </svg>
              <span className="dz-text">Choose audio file</span>
              <span className="dz-hint">MP3 / WAV / M4A</span>
            </>
          )}
          {file && (
            <div className="file-info">
              <span className="file-name" title={file.name}>
                {file.name}
              </span>
              <span className="file-size">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </span>
            </div>
          )}
        </label>
        {progress > 0 && (
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }} />
          </div>
        )}
        {error && <div className="error-msg">{error}</div>}
        {success && <div className="success-msg">Uploaded!</div>}
        <button
          type="submit"
          className="upload-btn"
          disabled={!file || uploading}
        >
          {uploading ? "Uploading…" : "Upload"}
        </button>
      </form>
      <Navigation />
    </div>
  );
};

export default Upload;
