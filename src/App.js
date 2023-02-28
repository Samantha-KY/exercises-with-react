import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Exercise2 from "./Exercise2";
import Exercise3 from "./Exercise3";
import Exercise4 from "./Exercise4";
import Exercise5 from "./Exercise5";
import Exercise6 from "./Exercise6";
import Exercise7 from "./Exercise7";
import Exercise8 from "./Exercise8";
import Exercise9 from "./Exercise9";
import Exercise1 from "./Exerice1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Exercise1 />,
  },
  {
    path: "/exercise2",
    element: <Exercise2 />,
  },
  {
    path: "/exercise3",
    element: <Exercise3 />,
  },
  {
    path: "/exercise4",
    element: <Exercise4 />,
  },
  {
    path: "/exercise5",
    element: <Exercise5 />,
  },
  {
    path: "/exercise6",
    element: <Exercise6 />,
  },
  {
    path: "/exercise7",
    element: <Exercise7 />,
  },
  {
    path: "/exercise8",
    element: <Exercise8 />,
  },
  {
    path: "/exercise9",
    element: <Exercise9 />,
  },
]);

function App() {
  return (
    <div>
      <nav className="fixed px-10 top-0 left-0 right-0 w-full py-5 flex gap-5 z-40">
        <a href="/" className="underline">
          Exercise1
        </a>
        <a href="/exercise2" className="underline">
          Exercise2
        </a>
        <a href="/exercise3" className="underline">
          Exercise3
        </a>
        <a href="/exercise4" className="underline">
          Exercise4
        </a>
        <a href="/exercise5" className="underline">
          Exercise5
        </a>
        <a href="/exercise6" className="underline">
          Exercise6
        </a>
        <a href="/exercise7" className="underline">
          Exercise7
        </a>
        <a href="/exercise8" className="underline">
          Exercise8
        </a>
        <a href="/exercise9" className="underline">
          Exercise9
        </a>
      </nav>

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
