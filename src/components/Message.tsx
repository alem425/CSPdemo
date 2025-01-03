import React from "react";
import { MessageProps } from "../interfaces";

const hello = (name: string): string => {
  return `Hello, ${name}!`;
};

const Message: React.FC<MessageProps> = ({ who }) => {
  return (
    <div>
      <h1>{hello(who)}</h1>
      <p>Welcome to React with TypeScript!</p>
    </div>
  );
};

export default Message;
