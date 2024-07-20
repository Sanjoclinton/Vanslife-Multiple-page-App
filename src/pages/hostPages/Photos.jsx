import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Photos = () => {
  const currentVan = useOutletContext();
  return (
    <div className="container mb-5">
    {currentVan && (
      <div className=" bg-white p-3">
       <img src={currentVan.imageUrl} alt={currentVan.name} width={100} className='img-fluid' />
      </div>
    )}
  </div>
  )
}

export default Photos