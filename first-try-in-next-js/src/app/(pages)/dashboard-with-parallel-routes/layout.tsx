"use client";
import CardView from '@/components/CardView'

export default function DashboardLayout({children,messages,notifications,userdata}:{
    children: React.ReactNode
    messages: React.ReactNode
    notifications: React.ReactNode
    userdata: React.ReactNode
}) {
    return (
    <div>
        <h2>DashboardLayout</h2>
        <h2>{children}</h2>
        <CardView>{messages}</CardView>
        <CardView>{notifications}</CardView>
        <CardView>{userdata}</CardView>
    </div>
  )
}
