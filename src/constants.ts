import { Node } from "reactflow";

type TinputPin = {
  id: string;
};

export const initNodes = [
  {
    id: 134134,
    data: { label: "node_1" },
    type: "input",
    position: { x: 100, y: 100 },
  },
  {
    id: 134135,
    type: "output",
    data: { label: "node_1" },
    position: { x: 200, y: 200 },
  },
] as unknown as Node[];
