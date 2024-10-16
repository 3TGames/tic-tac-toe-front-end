import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { NotFound } from "./pages/NotFound/NotFound";
import { PageTemplate } from "./components";


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
