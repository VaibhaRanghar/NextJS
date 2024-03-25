import Link from 'next/link';
import React from 'react'

export const metadata = {
  title:"Products",
};

export default function Products() {
  return (<>
    <Link href={"/"}>Home</Link>
    <h1>Products</h1>
    
    </>)
}
