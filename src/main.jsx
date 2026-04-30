import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router/dom'
import { router } from './routes/Routes'
import TimelineContextProvider from './components/context/TimelineContextProvider'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <TimelineContextProvider>
    <RouterProvider router={router}/>
   </TimelineContextProvider>
  </StrictMode>,
)
