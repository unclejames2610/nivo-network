import Network2 from "@/components/Network2";
import Link from "next/link";
import React from "react";

const NetworkPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen w-full flex items-center justify-center flex-col gap-6 ">
      <div className="h-96 w-96">
        <Network2 />
      </div>

      <Link href="/">Switch</Link>
    </div>
  );
};

export default NetworkPage;
