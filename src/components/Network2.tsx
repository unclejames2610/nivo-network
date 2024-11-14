"use client";
import React, { FC, useState } from "react";
import { ResponsiveNetwork } from "@nivo/network";
import { data } from "@/constants/data";

const Network2 = () => {
  return (
    <ResponsiveNetwork
      data={data}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      linkDistance={(e) => e.distance}
      centeringStrength={0.3}
      repulsivity={6}
      nodeSize={(n) => n.size}
      activeNodeSize={(n) => 1.5 * n.size}
      nodeColor={(e) => e.color}
      nodeBorderWidth={1}
      nodeBorderColor={{
        from: "color",
        modifiers: [["darker", 0.8]],
      }}
      linkThickness={(n) => 2 + 2 * n.target.data.height}
      linkBlendMode="multiply"
      motionConfig="wobbly"
    />
  );
};

export default Network2;
