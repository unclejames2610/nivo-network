"use client";
import React, { FC, useState } from "react";
import { NodeProps, ResponsiveNetwork } from "@nivo/network";
import { data, data2 } from "@/constants/data";

// Define a specific type for the node's data
export interface CustomNodeData {
  id: string;
  height: number;
  size: number;
  color: string;
  image?: string;
}

// Extend NodeProps with CustomNodeData as the generic type

const CustomNode: FC<NodeProps<CustomNodeData>> = ({ node }) => {
  const [isHovered, setIsHovered] = useState(false);

  const { x, y, size } = node;
  const color = node.data.color;

  const scale = isHovered ? 1.5 : 1;

  return (
    <g
      transform={`translate(${x}, ${y}) scale(${scale})`}
      style={{ cursor: "pointer" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip with node ID */}
      <title>{node.data.id}</title>

      {node.data.image ? (
        <>
          <defs>
            {/* Define a circular clip path for the image */}
            <clipPath id={`clip-${node.data.id}`}>
              <circle r={size / 2} cx="0" cy="0" />
            </clipPath>
          </defs>
          <image
            href={node.data.image}
            width={size}
            height={size}
            x={-size / 2}
            y={-size / 2}
            clipPath={`url(#clip-${node.data.id})`}
            preserveAspectRatio="xMidYMid slice"
          />
        </>
      ) : (
        <circle r={size / 2} fill={color} strokeWidth={1} stroke={color} />
      )}
    </g>
  );
};

const Network = () => {
  return (
    // <ResponsiveNetwork
    //   data={data2}
    //   margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
    //   linkDistance={(e) => e.distance}
    //   centeringStrength={0.3}
    //   repulsivity={6}
    //   nodeSize={(n) => n.size}
    //   activeNodeSize={(n) => 1.5 * n.size}
    //   nodeColor={(e) => e.color}
    //   nodeBorderWidth={1}
    //   nodeBorderColor={{
    //     from: "color",
    //     modifiers: [["darker", 0.8]],
    //   }}
    //   linkThickness={(n) => 2 + 2 * n.target.data.height}
    //   linkBlendMode="multiply"
    //   motionConfig="wobbly"
    // />

    <ResponsiveNetwork
      data={data2}
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
      nodeComponent={CustomNode} // Use custom node rendering
    />
  );
};

export default Network;
