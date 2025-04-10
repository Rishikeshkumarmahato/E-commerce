import React from 'react'
import './Category.css';

const Category = ({finalCat,setcatName}) => {
    let categories=finalCat.map((v,i)=>{
        return(<li key={i} onClick={()=>{setcatName(v.name)}}>{v.name}</li>)
    })
  return (
    <>
    <div className="category">
        <h3>Category</h3>
        <ul>
            {categories}
        </ul>
    </div>
    </>
  )
}
export default Category