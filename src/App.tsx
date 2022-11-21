import React from "react";
import ReactFlow, { useNodesState } from "reactflow";
import styled from "styled-components";
import Color from "./Color";

const App = () => {
  const [nodes, setNodes, onNodeChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useNodesState([]);
  const nodeTypes = {
    selectorNode: Color,
  };

  return (
    <Container>
      <ReactFlow />
    </Container>
  );
};
export default App;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;
