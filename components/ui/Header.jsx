import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import Search from "./Search";

export default function Header() {
 
  return (
    <div className="flex justify-between items-center px-4 py-5">
      <Nav />
      <Logo />
    </div>
  );
}
