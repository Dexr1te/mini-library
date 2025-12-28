import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider} from 'react-router'
import './index.css'
import { router } from './provider/router'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
};

initializeApp(firebaseConfig);
 
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
