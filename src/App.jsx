import { useState } from 'react';
import "./App.css";
import {createBrowserRouter,RouterProvider} from "react-router-dom";

import Counter from './components/Counter';
import Task from './components/Task';
function App() {
 
const router = createBrowserRouter([
  {
    path:"/counter",
    element:<Counter />
  },
  {
    path:"/task",
    element:<Task />
  }
]);

return <>
<h2>Welcome To Pharma App !</h2>
<RouterProvider router={router}/>
</>
  
}

export default App
