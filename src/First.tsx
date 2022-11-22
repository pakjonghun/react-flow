import React from "react";
import { Connection, Handle, Position } from "reactflow";
import styled from "styled-components";
import { UseCtx } from "./ctx";

export interface IData {
  title: string;
  desc: string;
  type: string;
  color: string;
  pinCount: number;
}

const First = (props: any) => {
  console.log("props", props.data);

  const ctx = UseCtx();

  const { title, desc, type, color, pinCount } = props.data as IData;
  const onConnect = (params: any) => console.log("handle onConnect", params);
  const isValidConnection = (connection: Connection) => {
    const fromID = connection.source;
    const toID = connection.target;
    // ctx?.nodes.

    // console.log("thisType", ctx?.nodes);
    return true;
  };

  const percent = 100 / (pinCount + 1);
  return (
    <Container>
      <Handle
        type="target"
        position={Position.Left}
        onConnect={onConnect}
        isValidConnection={isValidConnection}
        style={{ backgroundColor: "green" }}
      />
      <Header>
        <Bar color={color} />
        <Text color={color}>{title}</Text>
      </Header>
      <Body>
        <Title>{type}</Title>
        <Desc>{desc}</Desc>
      </Body>
      {Array(pinCount)
        .fill(0)
        .map((_, idx) => {
          return (
            <Handle
              key={Math.random().toString(32).substring(5, 30)}
              type="source"
              position={Position.Right}
              id="a"
              style={{
                top: `${percent * (idx + 1)}%`,
                right: "-.5rem",
              }}
              isValidConnection={isValidConnection}
            />
          );
        })}
    </Container>
  );
};
export default React.memo(First);

const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  border-radius: 10px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-right: 1px solid lightgray;
`;

const Bar = styled.div<{ color?: string }>`
  width: 0.1rem;
  height: 2.5rem;
  background-color: ${(props) => props.color || "purple"};
  border-radius: 2rem;
  border: 1px solid black;
`;

const Text = styled.span<{ color?: string }>`
  margin-left: 1rem;
  font-size: 2rem;
  color: ${(props) => props.color || "purple"};
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  color: darkgray;
`;
const Title = styled.div``;
const Desc = styled.div``;
