import React from "react";

function DefaultLayout({ children }: { children: React.ReactNode }) {
  return <div className="w-full flex justify-center mx-auto ">{children}</div>;
}

export default DefaultLayout;
