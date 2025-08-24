import React from "react";
import { GoHomeFill } from "react-icons/go";
import { CgSoftwareUpload } from "react-icons/cg";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <>
      <div className=" fixed bottom-0  w-full bg-[#1C2621] p-5">
        <div className="flex justify-around">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `flex flex-col items-center text-2xl ${
                isActive ? "text-green-400" : "text-white"
              }`
            }
          >
            <GoHomeFill className="text-3xl font-bold" />
            <h1 className="text-xl font-bold">Home</h1>
          </NavLink>
          <NavLink
            to={"/upload"}
            className={({ isActive }) =>
              `flex flex-col items-center text-2xl ${
                isActive ? "text-green-400" : "text-white"
              }`
            }
          >
            <CgSoftwareUpload className="text-3xl font-bold" />
            <h1 className="text-xl font-bold">Upload</h1>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navigation;
