import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import "./styles/styles.css";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./routes/AppRouter.jsx";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster richColors />
    <RouterProvider router={AppRouter} />
  </StrictMode>
);
