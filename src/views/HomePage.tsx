"use client";

import Network from "@/components/Network";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen w-full flex items-center justify-center flex-col gap-6 ">
      <div className="h-96 w-96">
        <Network />
      </div>

      <Link href="/network2">Switch</Link>
    </div>
  );
};

export default HomePage;
