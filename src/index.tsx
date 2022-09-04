import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <StrictMode>
    <div>
      <h1>Hello!</h1>
    </div>
  </StrictMode>
);
