import React from "react";
import Spinner from "./Spinner";
import { wait } from "@testing-library/user-event/dist/utils";
type ButtonProps = {
  text?: string;
  className?: string;
  secondary?: boolean;
  onClick?: () => void;
  loading?: boolean;
};
function Button({
  text = "Button",
  className,
  secondary,
  onClick,
  loading = false,
}: ButtonProps) {
  return (
    <button
      className={`py-2 px-9 rounded-full flex justify-center items-center gap-3 border-2 text-white border-white hover:bg-myPink transition-all hover:drop-shadow-lg ${
        secondary ? "bg-myPink" : "bg-Myblue"
      } ${className} ${loading && "cursor-wait"}`}
      onClick={onClick}
      disabled={loading} 
    >
      {loading && <Spinner />}
      {text}
    </button>
  );
}
export default Button;
