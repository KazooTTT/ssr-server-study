import Home from "@/pages/Home/index";
import Demo from "@/pages/Demo/index";

interface RouterProps {
  path: string;
  element: JSX.Element;
}

const router: Array<RouterProps> = [
  {
    path: "",
    element: <Home></Home>,
  },
  {
    path: "/demo",
    element: <Demo></Demo>,
  },
];

export default router;
