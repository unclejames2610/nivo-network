"use client";
import CytoGraph from "@/components/CytoGraph";
import React from "react";

const Cytoscape = () => {
  return (
    <div className="bg-gray-100 min-h-screen w-full flex items-center justify-center flex-col gap-6 ">
      <div className="h-screen w-screen">
        <CytoGraph />
      </div>
    </div>
  );
};

export default Cytoscape;
