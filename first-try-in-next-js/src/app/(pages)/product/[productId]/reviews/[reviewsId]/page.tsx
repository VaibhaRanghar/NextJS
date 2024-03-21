import React from 'react'

export default function ReviewsWithId({params}: {
    params: {
        productId:string,
        reviewsId:string
    }
}) {
  return (<>
    <h1>{params.productId + ")"} Product.</h1>
    <h2>ReviewsWithId = {params.reviewsId}</h2>
    </>
  )
}
