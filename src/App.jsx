import React from 'react'
import {  BrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes'


export const App = () => {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}
