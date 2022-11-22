import { transcode } from "buffer";
import React, { useCallback } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  Background,
  Node,
  useStore,
  getStraightPath,
  Position,
  addEdge,
  Connection,
} from "reactflow";
import "reactflow/dist/style.css";
import styled from "styled-components";
import { UseCtx } from "./ctx";

import DragHandleNode from "./DragHandler";
import First, { IData } from "./First";

const nodeTypes = {
  a: DragHandleNode,
  b: First,
};

const DragHandleFlow = () => {
  const ctx = UseCtx();

  // const sourceNode = useStore(
  //   useCallback((store)=>{
  //     return store.nodeInternals.get(source)
  //   },[source])
  // );

  // const targetNode = useStore(
  //   useCallback((store)=>{
  //     return store.nodeInternals.get(target)
  //   },[target])
  // )

  // if (!sourceNode || !targetNode) {
  //   return null;
  // }

  // const { sx, sy, tx, ty } = getEdgeParams(sourceNode, transcode);
  const onChnnect = useCallback((params: Connection) => {
    if (ctx === null) return;
    ctx.setEdges((eds) =>
      addEdge({ ...params, animated: true, style: { stroke: "#000" } }, eds)
    );
  }, []);
  return (
    <Container>
      <ReactFlow
        onConnect={onChnnect}
        nodes={ctx === null ? [] : ctx.nodes}
        edges={ctx === null ? [] : ctx.edges}
        onNodesChange={ctx?.onNodesChange}
        onEdgesChange={ctx?.onEdgesChange}
        nodeTypes={nodeTypes}
      >
        {/* <Background /> */}
      </ReactFlow>
    </Container>
  );
};

export default DragHandleFlow;

const Container = styled.div`
  height: 100vh;
`;
