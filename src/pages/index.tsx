import React from "react";
import WelcomeComponente from "@/components/welcome";
import DaysContainerComponent from "@/components/days-container";

export default function Home() {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-9 items-center justify-items-center h-screen">
      <WelcomeComponente />
      <DaysContainerComponent />
    </div>
  );
}
