import React from "react";
import "@/app/global.css";

export default function CardView({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border-solid border-neutral-800 border-4 shadow-lg p-9 m-2 flex items-center justify-center">
      {children}
    </div>
  );
}
