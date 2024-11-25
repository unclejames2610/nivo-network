"use client";
import { cytoData } from "@/constants/data";
import React, { useEffect, useState } from "react";
import CytoscapeComponent from "react-cytoscapejs";
import COSEBilkent from "cytoscape-cose-bilkent";
import cytoscape from "cytoscape";

cytoscape.use(COSEBilkent);

const CytoGraph = () => {
  // const elements = [
  //   { data: { id: "one", label: "Node 1" }, position: { x: 30, y: 32 } },
  //   { data: { id: "two", label: "Node 2" }, position: { x: 60, y: 56 } },
  //   {
  //     data: { source: "one", target: "two", label: "Edge from Node1 to Node2" },
  //   },
  // ];

  const stylesheet = [
    {
      selector: "node[label]",
      style: {
        label: "data(label)",
        // "background-color": "blue",
        "text-valign": "top",
        // color: "white",
        "font-size": 14,
        width: 30,
        height: 30,
      },
    },
    {
      selector: "edge[label]",
      style: {
        label: "data(label)",
        "curve-style": "bezier",
        // "target-arrow-shape": "triangle",
        "line-color": "gray",
        "target-arrow-color": "gray",
        width: 1,
        "font-size": 14,
      },
    },
    {
      selector: ".highlighted",
      style: {
        "background-color": "yellow",
        "line-color": "yellow",
        "target-arrow-color": "yellow",
        width: 4,
      },
    },
  ];

  const setListeners = (cy: any) => {
    if (!cy) return; // Ensure cy is initialized
    cy.on("mouseover", "edge", (event: any) => {
      console.log("Hovered over edge:", event.target.data());
    });
  };

  const [fetchedData, setFetchedData] = useState<any>();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "http://192.168.100.125:4000/api/graph/cytoscape"
        );
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

  const arrayData = [fetchedData];

  return (
    <CytoscapeComponent
      elements={fetchedData.elements}
      // style={{ width: "600px", height: "600px" }}
      className="h-full w-full"
      stylesheet={stylesheet}
      cy={(cy) => {
        setListeners(cy);
      }}
      layout={{
        name: "circle", // Choose "grid", "circle", "breadthfirst" "cose" "concentric", etc.
        fit: true, // Ensures all elements are visible within the viewport
        padding: 50, // Space around the layout
      }}
    />
  );
};

export default CytoGraph;
