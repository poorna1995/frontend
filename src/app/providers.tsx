"use client";
import React, { useEffect } from "react";
// import LogRocket from "logrocket";
// import setupLogRocketReact from "logrocket-react";

export default function Providers({ children }: { children: React.ReactNode }) {
  //   useEffect(() => {
  //     if (
  //       typeof window !== "undefined" &&
  //       process.env.NODE_ENV === "production"
  //     ) {
  //       LogRocket.init(process.env.NEXT_PUBLIC_LOGROCKET_KEY as string);
  //       // plugins should also only be initialized when in the browser
  //       setupLogRocketReact(LogRocket);
  //     }
  //   }, []);
  return <div>{children}</div>;
}
