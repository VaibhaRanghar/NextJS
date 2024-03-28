"use client";

import { useRouter } from 'next/navigation'
import React from 'react'

export default function Order() {
    const router = useRouter();
    function handleClick(){
        console.log("placing an order")
        router.push("/");
    }
  return (<>
    <h1>Order</h1>
    <button onClick={handleClick}>Place Order</button>
  </>)
}
