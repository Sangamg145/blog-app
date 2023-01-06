import React from 'react'
import {Outlet} from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
export default function DashboardLayout() {
  return (
    <div>
         <Navbar />

{/* This element will render either <DashboardMessages> when the URL is
    "/messages", <DashboardTasks> at "/tasks", or null if it is "/"
*/}
<Outlet />
<Footer />
    </div>
  )
}
