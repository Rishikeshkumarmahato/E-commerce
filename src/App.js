import Header from './Header';
import Category from './Category';
import Products from './Products';
import { useEffect, useState } from 'react';
import Footer from './Footer';
import axios from 'axios'
import Middle from './Middle';

function App() {
  const [finalCat, setfinalCat] = useState([])
  const [finalPro, setfinalPro] = useState([])
  const [catName, setcatName] = useState("")
  const [userDetails, setuserDetails] = useState({
    uname:'',
    uphone:'',
    uemail:'',
    ucity:'',
    ustate:'',
    upassword:''
  })
  const [users, setUsers] = useState([])
  let getCategory=()=>{
    fetch('https://dummyjson.com/products/categories')
    .then((res)=>res.json())
    .then((finalres)=>{
    setfinalCat(finalres)      
    })
  }
  let getProducts=()=>{
    fetch('https://dummyjson.com/products')
    .then((proRes)=>proRes.json())
    .then((finalproRes)=>{
      setfinalPro(finalproRes.products)
    })
  }
  let pitems=finalPro.map((v,i)=>{
    return(<Products key={i} pdata={v}/>)
  })
  useEffect(()=>{
    getCategory();
    getProducts();
  },[])
  useEffect(()=>{
    axios.get(`https://dummyjson.com/products/category/${catName}`)
    .then((proRes)=>proRes.data)
    .then((finalproRes)=>{
    setfinalPro(finalproRes.products)
    })
  },[catName])
  return (
    <>
    <Header userDetails={userDetails}setuserDetails={setuserDetails} setUsers={setUsers} users={users}/>
    <Middle/>
    <div className='proHead'><h1>Our Products</h1></div>
    <div className='ourProducts'>
      <div className='pCategory'>
        <Category finalCat={finalCat} setcatName={setcatName}/>
      </div>
      <div className='pItems'>
        {finalPro.length>=1?pitems:"Product Not Found"}
      </div>
    </div>
    <div className='footer'>
      <Footer/>
    </div>
    </>
  );
}

export default App;
