import React from "react";
import { ModeToggle } from "@/components/ModeToggle";
import { SignedIn, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <header className="border-b">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <ModeToggle />
        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>
    </header>
  );
};

export default Navbar;
