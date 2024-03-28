import Link from 'next/link'
import React from 'react'

export default function Notifications() {
  return (
    <h1>Notifications <Link className='text-purple-500' href={"/dashboard-with-parallel-routes/archived"}>Archived</Link></h1>
  )
}
