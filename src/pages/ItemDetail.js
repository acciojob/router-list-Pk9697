import React from 'react'
import { useParams } from 'react-router-dom'

function ItemDetail({ items }) {
    const { id } = useParams()
    const item = items.find((item) => item.id === parseInt(id))

  return (
      <div>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
    </div>
  )
}

export default ItemDetail