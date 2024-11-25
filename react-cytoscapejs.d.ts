declare module "react-cytoscapejs" {
  import * as React from "react";
  import { Core, CytoscapeOptions } from "cytoscape";

  export interface CytoscapeComponentProps extends CytoscapeOptions {
    cy?: (cy: Core) => void;
    style?: React.CSSProperties;
    className?: string;
  }

  const CytoscapeComponent: React.FC<CytoscapeComponentProps>;
  export default CytoscapeComponent;
}
