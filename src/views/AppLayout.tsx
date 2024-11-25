"use client";
import React, { FC, ReactNode } from "react";
import { Neo4jProvider, createDriver } from "use-neo4j";

const AppLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const driver = createDriver(
    "bolt",
    "192.168.100.125",
    7687,
    "neo4j",
    "inspired"
  );
  return (
    // <Neo4jProvider
    //   //   scheme="bolt"
    //   //   host="http://192.168.100.125"
    //   //   port={7474}
    //   //   username="neo4j"
    //   //   password="inspired"
    //   //   database="neo4j"
    //   driver={driver}
    // >
    <div>{children}</div>
    // </Neo4jProvider>
  );
};

export default AppLayout;
