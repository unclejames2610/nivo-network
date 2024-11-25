"use client";
import React, { FC, useEffect, useState } from "react";
import { InputLink, InputNode, ResponsiveNetwork } from "@nivo/network";
import { data } from "@/constants/data";
import CustomNode from "./CustomNode";

export interface NodeModel {
  id: string;
  height: number;
  size: number;
  color: string;
  image?: string;
}

export interface LinkModel {
  source: string;
  target: string;
  distance: number;
}

export interface NivoModel {
  nodes: NodeModel[];
  links: LinkModel[];
}

const Network3 = () => {
  const [fetchedData, setFetchedData] = useState<NivoModel | undefined>();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://192.168.100.125:4000/api/graph");
        const data = await response.json();
        setFetchedData(data);
        console.log("data", data);
      } catch (error) {
        console.error("Error fetching graph data:", error);
      }
    }

    fetchData();

    // Optional: Set up polling to refresh data periodically
    const interval = setInterval(fetchData, 5000); // Fetch every 5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  if (!fetchedData) {
    return <p>Loading...</p>;
  }
  return (
    <ResponsiveNetwork
      data={fetchedData!!}
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
      //   nodeComponent={CustomNode}
    />
  );
};

export default Network3;
