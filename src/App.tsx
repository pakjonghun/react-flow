import React, { useCallback, useEffect, useState } from "react";
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
  const [value, setValue] = useState("a");
  const [nodes, setNodes, onNodeChange] = useNodesState(initNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    setNodes((nodes) => {
      return nodes.map((node) => {
        if (node.id === "1") {
          return { ...node, data: { ...node.data, label: value } };
        } else return node;
      });
    });
  }, [value, setNodes]);

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

  const onChange = (text: string) => {
    setValue(text);
  };

  return (
    <Container>
      <input value={value} onChange={(e) => onChange(e.target.value)} />
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
