import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { NotFound } from "./pages/NotFound/NotFound";
import { Game } from "./pages/Game/Game";
import { PageTemplate } from "./components";
import { PVPLocal } from "./pages/PVPLocal/PVPLocal.tsx";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <PageTemplate/>,
      children:[
        {
            index:true,
            element:<Home/>
        },
        {
            path:"about",
            element:<About/>
        },
        {
          path:"game",
          children:[
            {
              index: true,
              element: <Game />
            },
            {
              path: "pvplocal",
              element: <PVPLocal />
            }
          ],
        },
        {
          path:"*",
          element: <NotFound/>
        },
      ],
    },
  ])

const Routes = () => {
    return(
        <RouterProvider router={router} />
    )
}

  
export {Routes}
