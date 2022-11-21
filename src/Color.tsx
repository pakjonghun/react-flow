import { Handle, Position } from "reactflow";

const Color = () => {
  <>
    <Handle
      type="target"
      position={Position.Left}
      style={{ backgroundColor: "red" }}
      onConnect={(param) => console.log("on connect param", param)}
    />
    <div>custom</div>
    <Handle
      type="source"
      position={Position.Right}
      style={{ backgroundColor: "blue" }}
      onConnect={(param) => console.log("on connect param", param)}
      isConnectable={false}
      id="a"
    />

    <Handle
      type="source"
      position={Position.Right}
      style={{ backgroundColor: "skyBlue" }}
      onConnect={(param) => console.log("on connect param", param)}
      isConnectable
      id="b"
    />
  </>;
};

export default Color;
