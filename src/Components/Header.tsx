import React from "react";
import Button from "./Button";

function Header(){
    return (
      <div className=" flex flex-wrap sm:flex-row gap-5 items-center justify-between bg-gradient-to-r drop-shadow-md from-Myblue to-myPink px-5 py-5 md:py-2 text-white">
        <img className="drop-shadow-md cursor-pointer" src="" alt="image" />

        <div className="flex">
          <Button text="Add New List" secondary/>
        </div>
      </div>
    );
}
export default Header;