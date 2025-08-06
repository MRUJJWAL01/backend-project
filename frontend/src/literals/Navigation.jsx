import React from "react";
import { GoHomeFill } from "react-icons/go";
import { CgSoftwareUpload } from "react-icons/cg";  
import { Link } from "react-router-dom";
const Navigation = () => {
    
  return (
    <>
      <div className=" fixed bottom-0  w-full bg-[#1C2621] p-5">
        <div className="flex justify-around">
          <Link to={'/'}  className="flex flex-col  items-center">
            <GoHomeFill className="text-3xl font-bold" />
            <h1 className="text-xl font-bold">Home</h1>
          </Link>
          <Link to={'/upload'} className="flex flex-col  items-center">
            <CgSoftwareUpload className="text-3xl font-bold" />
            <h1 className="text-xl font-bold">Upload</h1>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navigation;
