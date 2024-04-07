import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './Router/Router'
import Authprovider from './Provirdes/Authprovider'




ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
<Authprovider>
<RouterProvider router={router}></RouterProvider>
</Authprovider>
</React.StrictMode>,
)
