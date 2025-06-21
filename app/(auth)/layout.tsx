import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <main className="container mx-auto px-8 flex min-h-screen flex-col items-center mt-20">{children}</main>;
};

export default layout;
