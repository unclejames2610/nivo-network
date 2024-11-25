import React, { FC, useState } from "react";
import { NodeProps, ResponsiveNetwork } from "@nivo/network";
import { CustomNodeData } from "./Network";

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
            style={{
              borderRadius: "50%", // Ensure the browser applies rounding
            }}
          />
        </>
      ) : (
        <circle r={size / 2} fill={color} strokeWidth={1} stroke={color} />
      )}
    </g>
  );
};

export default CustomNode;
