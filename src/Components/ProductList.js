import React, { useEffect, useState } from 'react'
import './ProductList.css'


const ProductList = () =>{

  const [products, setProducts] = useState([])

    
    useEffect(()=>{

        getProducts()
    },[])

// Bearer ka dhyan rakha kro.................
    const getProducts = async () =>{

      let result= await fetch("http://localhost:3000/get",{

        headers:{
          authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
      })
  
          result= await result.json()

          setProducts(result)
  }
  console.log("product",products);


            return(
         <div className="table">

<table className="table table-hover table-dark height">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">City</th>
      <th scope="col">Salary</th>
      <th scope="col">Actions</th>
      <th scope="col"></th>
     
    </tr>
  </thead>

  <tbody>

  {

      products.map((item, index)=>

    <tr>
      <th scope="row">{index + 1}</th>
      <td>{item.name}</td>
      <td>{item.age}</td>
      <td>{item.city}</td>
      <td>{item.salary}</td>

    </tr>
    )
   
  }
  </tbody>
</table>


        </div>
             )
}

export default ProductList