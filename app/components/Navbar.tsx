"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const clickAboutBtnHandler = () => {
    router.push("/about");
  };
  const clickHomeBtnHandler = () => {
    router.push("/");
  };

  return (
    <div className="py-2 flex space-x-4 mb-3">
    <button onClick={clickHomeBtnHandler} type="button" className="py-2 px-6 rounded-md bg-slate-800 text-lg text-white cursor-pointer font-semibold focus:outline-none focus:ring-1 focus:ring-white hover:bg-slate-400 hover:text-slate-700 capitalize">Home</button>
    <button onClick={clickAboutBtnHandler} type="button" className="py-2 px-6 rounded-md bg-slate-800 text-lg text-white cursor-pointer font-semibold focus:outline-none focus:ring-1 focus:ring-white hover:bg-slate-400 hover:text-slate-700 capitalize">About</button>
 
</div>
  )
};

export default Navbar;
