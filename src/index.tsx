import React from "react";
import ReactDOM from "react-dom/client";
import { ReactFlowProvider } from "reactflow";
import App from "./App";
import "reactflow/dist/style.css";
import CtxProvider from "./ctx";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ReactFlowProvider>
      <CtxProvider>
        <App />
      </CtxProvider>
    </ReactFlowProvider>
  </React.StrictMode>
);
