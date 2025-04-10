import React from 'react'
import './Products.css';

const Products = ({pdata}) => {
  return (
    <>
    <div className='productbox'>
      <img src={pdata.thumbnail}/>
      <h4>{pdata.title}</h4>
      <b>$ {pdata.price}</b>
    </div>
    </>
  )
}

export default Products