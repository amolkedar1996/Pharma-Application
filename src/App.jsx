import { useState } from 'react';
import "./App.css";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

import Counter from './components/Counter';
import Task from './components/Task';
import Posts from "./components/Posts";
function App() {
 
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path:"/counter",
    element:<Counter />
  },
  {
    path:"/task",
    element:<Task />
  },
  {
    path:"/posts",
    element:<Posts />
  }
]);

return <>
<h2>Welcome To Pharma App !</h2>
<QueryClientProvider client={queryClient}>
<RouterProvider router={router}/>
</QueryClientProvider>
</>
  
}

export default App
