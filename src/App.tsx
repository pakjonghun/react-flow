import React, { useCallback, useEffect } from "react";
import ReactFlow, {
  Position,
  useEdges,
  useEdgesState,
  useNodesState,
  addEdge,
} from "reactflow";
import styled from "styled-components";
import Color from "./Color";

const nodeTypes = {
  selectorNode: Color,
};

const initNodes = [
  {
    id: "1",
    position: {
      x: 100,
      y: 100,
    },
    data: {
      label: "hi",
    },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: "2",
    position: {
      x: 200,
      y: 200,
    },
    data: {
      label: "hi",
    },
    type: "selectorNode",
  },
];

const App = () => {
  const [nodes, setNodes, onNodeChange] = useNodesState(initNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    const onChange = (event: any) => {
      setNodes((nds) => {
        return nds.map((node) => {
          if (node.id === "2") {
            return node;
          }

          return { ...node, data: node.data, color: "gray" };
        });
      });
    };
  }, []);

  const onConnect = useCallback(
    (params: any) =>
      setEdges((eds) =>
        addEdge({ ...params, animated: true, style: { stroke: "#fff" } }, eds)
      ),
    []
  );

  return (
    <Container>
      <ReactFlow
        onNodesChange={onNodeChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
      />
    </Container>
  );
};
export default App;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;
