import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import Cart from "./components/Cart.js";
import RestrauntMenu from "./components/RestrauntMenu.js";
import UserContext from "./utils/UserContext.js";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

//Chunking
//Code Splitting
//Dynamic Bundeling
//Lazy Loading
//On Demand Loading
const Grocery = lazy(() => import("./components/Grocery.js"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    //authentication API
    setUserName("Kanishk Pant");
  }, []);

  return (
    <UserContext.Provider
      value={{ loggedInUser: userName, setUserName: setUserName }}
    >
      <div className="app">
        <Header />

        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

//Routing configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restraunt/:resId",
        element: <RestrauntMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
