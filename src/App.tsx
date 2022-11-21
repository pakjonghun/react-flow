import React from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  Background,
  Node,
} from "reactflow";
import "reactflow/dist/style.css";
import styled from "styled-components";

import DragHandleNode from "./DragHandler";

const nodeTypes = {
  a: DragHandleNode,
};

const initialNodes = [
  {
    id: "2",
    type: "a",
    dragHandle: ".custom-drag-handle",
    style: { border: "1px solid #ddd", padding: "20px 40px" },
    position: { x: 200, y: 200 },
  },
] as Node[];

const DragHandleFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  return (
    <Container>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
      >
        <Background />
      </ReactFlow>
    </Container>
  );
};

export default DragHandleFlow;

const Container = styled.div`
  height: 100vh;
`;
