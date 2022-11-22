import React, { useContext } from "react";
import { createContext } from "react";
import {
  Node,
  Edge,
  useEdgesState,
  useNodesState,
  NodeChange,
  EdgeChange,
  OnNodesChange,
  OnEdgesChange,
} from "reactflow";
import { IData } from "./First";

interface ICtxValue {
  nodes: Node[];
  edges: Edge[];
  setNodes: React.Dispatch<React.SetStateAction<Node<any>[]>>;
  setEdges: React.Dispatch<React.SetStateAction<Edge<any>[]>>;
  onNodesChange: (changes: NodeChange[]) => void;
  onEdgesChange: (changes: EdgeChange[]) => void;
}

const TempCtx = createContext<null | ICtxValue>(null);

const aData: IData = {
  title: "First",
  desc: "StartNode",
  pinCount: 3,
  type: "unknown",
  color: "red",
};
const bData: IData = {
  title: "Second",
  desc: "SecondNode",
  pinCount: 2,
  type: "string",
  color: "blue",
};

const initialNodes = [
  // {
  //   id: "2",
  //   type: "a",
  //   dragHandle: ".custom-drag-handle",
  //   style: { border: "1px solid #ddd", padding: "20px 40px" },
  //   position: { x: 200, y: 200 },
  // },
  {
    id: "3",
    type: "b",
    data: aData,
    position: { x: 200, y: 200 },
    // sourcePosition: Position.Right,
    // targetPosition: Position.Left,
  },
  {
    id: "4",
    type: "b",
    data: bData,
    position: { x: 400, y: 400 },
    // sourcePosition: Position.Right,
    // targetPosition: Position.Left,
  },
] as Node[];

interface props {
  children: React.ReactNode;
}

const CtxProvider: React.FC<props> = ({ children }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  return (
    <TempCtx.Provider
      value={{ nodes, edges, setNodes, setEdges, onNodesChange, onEdgesChange }}
    >
      {children}
    </TempCtx.Provider>
  );
};

export function UseCtx() {
  const ctx = useContext(TempCtx);
  return ctx;
}

export default CtxProvider;
