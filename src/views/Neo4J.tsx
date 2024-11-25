"use client";
import React, { useMemo } from "react";
import { ForceGraph2D } from "react-force-graph";
import { useReadCypher } from "use-neo4j";

const Neo4J = () => {
  const query = `MATCH (n) RETURN n LIMIT 25`; // Query with nodes and relationships
  const { loading, error, records } = useReadCypher(query);

  console.log(records);

  // Prepare the graph data unconditionally
  // const graphData = useMemo(() => {
  //   const nodes = new Map();
  //   const links: any = [];

  //   records?.forEach((record) => {
  //     const sourceNode = record.get("n");
  //     const targetNode = record.get("m");
  //     const relationship = record.get("r");

  //     if (sourceNode && !nodes.has(sourceNode.identity)) {
  //       nodes.set(sourceNode.identity, {
  //         id: sourceNode.identity,
  //         label: sourceNode.labels?.[0] || "Node",
  //         ...sourceNode.properties,
  //       });
  //     }
  //     if (targetNode && !nodes.has(targetNode.identity)) {
  //       nodes.set(targetNode.identity, {
  //         id: targetNode.identity,
  //         label: targetNode.labels?.[0] || "Node",
  //         ...targetNode.properties,
  //       });
  //     }
  //     if (relationship) {
  //       links.push({
  //         source: sourceNode.identity,
  //         target: targetNode.identity,
  //         type: relationship.type,
  //         ...relationship.properties,
  //       });
  //     }
  //   });

  //   return {
  //     nodes: Array.from(nodes.values()),
  //     links,
  //   };
  // }, [records]);

  // Handle loading and error states after hooks are called
  if (loading) return <div>Loading...</div>;
  if (error) return <div className="error">{error.message}</div>;

  return (
    <div style={{ height: "600px" }}>
      {/* <ForceGraph2D
        graphData={graphData}
        nodeLabel={(node) =>
          `${node.label}: ${JSON.stringify(node.properties)}`
        }
        linkLabel={(link) => `${link.type}`}
        nodeAutoColorBy="label"
        linkDirectionalArrowLength={6}
        linkDirectionalArrowRelPos={1} // Arrow near the target node
        linkCurvature={0.2} // Add curvature for better visualization
        onNodeClick={(node) => console.log("Node clicked:", node)}
        onLinkClick={(link) => console.log("Link clicked:", link)}
      /> */}
    </div>
  );
};

export default Neo4J;
