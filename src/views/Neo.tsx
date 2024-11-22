"use client";
import React, { useEffect, useRef } from "react";
import NeoVis from "neovis.js";

const Neo4JVisualization = () => {
  const visRef = useRef(null);

  useEffect(() => {
    // Define the Neovis.js configuration
    const config: any = {
      container_id: "viz", // The ID of the div where the visualization will render
      server_url: "bolt://192.168.100.125:7687", // Your Neo4j instance
      server_user: "neo4j", // Your Neo4j username
      server_password: "inspired", // Your Neo4j password
      labels: {
        // Customize how node labels are displayed
        Person: {
          caption: "name",
          size: "age", // Size the node by a property
          community: "group", // Group nodes by a property
        },
      },
      relationships: {
        // Customize how relationships are displayed
        KNOWS: {
          caption: true, // Display the relationship type
        },
      },
      initial_cypher: `
        MATCH (n)-[r]->(m)
        RETURN n, r, m
        LIMIT 100
      `, // Your Cypher query
    };

    // Initialize Neovis.js
    const viz = new NeoVis(config);

    // Render the visualization
    viz.render();

    // Clean up on component unmount
    return () => {
      if (viz) {
        viz.clearNetwork();
      }
    };
  }, []);

  return (
    <div id="viz" ref={visRef} style={{ width: "100%", height: "600px" }} />
  );
};

export default Neo4JVisualization;
