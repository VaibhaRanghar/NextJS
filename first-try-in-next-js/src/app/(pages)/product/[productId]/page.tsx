import React from 'react'

export default function ProductWithId( { params }: {
  params: {productId : string}
} ) {
  return (
    <h1>ProductWithID = {params.productId}</h1>
  )
}
