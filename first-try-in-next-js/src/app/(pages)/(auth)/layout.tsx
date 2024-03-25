"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../global.css";

const navLinks = [
  { name: "Login",href: "/login",id: "1",},
  { name: "Forgot Password", href: "/forgot-password", id: "2" },
  { name: "Register", href: "/register", id: "3" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {

    const pathname = usePathname();
  return (
    <div>
        {navLinks.map((page) => {
            const isActive = pathname.startsWith(page.href)
            return <Link href={page.href} key={page.id} className={isActive? "font-bold mr-4": "text-blue-500 mr-4" }>{page.name}</Link>
        })}
        {children}
        
    </div>
  );
}
