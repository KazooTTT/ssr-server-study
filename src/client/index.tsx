import Home from "@/pages/Home/index";
import { hydrateRoot } from "react-dom/client";

hydrateRoot(
  document.getElementById("root") as Element | Document,
  <Home></Home>
);
