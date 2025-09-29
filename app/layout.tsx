export const metadata = { title: "Most Husne Jahan | Machine Learning Engineer" };
import "../styles/globals.css";
import React from "react";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>);
}
