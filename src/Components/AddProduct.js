import React from 'react'
import { Link } from 'react-router-dom'
import './AddProduct.css'


const AddProduct = () =>{

    const [name, setName] = React.useState('')
    const [age, setAge] = React.useState('')
    const [city, setCity] = React.useState('')
    const [salary, setSalary] = React.useState('')
    const [error, setError] = React.useState(false)


const addProduct = async (e) =>{
// e.preventDefault()

  if(!name || !age || !city || !salary){

    setError(true)

    return false
  }else{

  }

// console.log(name,age,city,salary);

const userId= JSON.parse(localStorage.getItem('id'))._id


// console.log(userId);

let result = await fetch("http://localhost:3000/post",{

      method: 'post',
      body: JSON.stringify({name,age,city,salary,userId}),
      headers: {
        "Content-Type": "application/json",

        authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`   //auth process token bina not work

      }
})
result = await result.json()
console.log("result",result);

} 

  return(
      <div className="product">
          <h1 className='inputBox'>Add Product...!!</h1>

          <form>
<div className="inputBox">
  <label for="exampleInputEmail1">User Name</label>
  <input value={name}  onChange={(e)=>{setName(e.target.value)}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
    
    { error && !name && <span className='invalid-input'>Enter Valid Name</span>}
</div>

<div className="inputBox">
  <label for="exampleInputPassword1">Age</label>
  <input value={age} onChange={(e)=>{setAge(e.target.value)}} type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Age" />

  { error && !age && <span className='invalid-input'>Enter Valid Age</span>}

</div>

<div className="inputBox">
  <label for="exampleInputPassword1">City</label>
  <input value={city} onChange={(e)=>{setCity(e.target.value)}} type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter City" />

  { error && !city && <span className='invalid-input'>Enter Valid City</span>}

</div>

<div className="inputBox">
  <label for="exampleInputPassword1">Salary</label>
  <input value={salary} onChange={(e)=>{setSalary(e.target.value)}} type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Salary" />

  { error && !salary && <span className='invalid-input'>Enter Valid Salary</span>}

</div>


<Link to="/add"><button onClick={addProduct} type="submit" className="addButton">Submit</button></Link>

     
</form>

      </div>
  )
}



export default AddProduct
