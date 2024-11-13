"use client";

import Network from "@/components/Network";
import React from "react";

const HomePage = () => {
  return (
    <div className="bg-gray-700 min-h-screen w-full flex items-center justify-center ">
      <div className="h-96 w-96">
        <Network />
      </div>
    </div>
  );
};

export default HomePage;
