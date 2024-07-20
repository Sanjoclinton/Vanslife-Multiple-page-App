import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Pricing = () => {
  const currentVan = useOutletContext();
  return (
    <div className="container mb-5">
    {currentVan && (
      <div className=" bg-white p-3">
        <p className="mb-2"><span className="fw-bold">${currentVan.price}.00</span>/day</p>
      </div>
    )}
  </div>
  )
}

export default Pricing