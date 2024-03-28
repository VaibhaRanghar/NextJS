import Link from 'next/link'
import React from 'react'
import '@/app/global.css'
export default function ArchivedNotifications() {
  return (
    <div>Archived Notifications <Link  className='text-purple-500' href={"/dashboard-with-parallel-routes"}>Default</Link></div>
  )
}
