import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Viewall = () => {

    const [data,changeData]=useState(

        []

    )

const  fetchData=()=>{
    axios.get("https://courseapplogix.onrender.com/getdata").then(

        (response)=>{
            changeData(response.data)
        }
    )
}

useEffect(()=>{fetchData()},[])

  return (
    <div>

<Navbar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


        <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">college</th>
      <th scope="col">Dob</th>
      <th scope="col">Cource</th>
      <th scope="col">Mobile</th>

      <th scope="col">Email</th>
      <th scope="col">Address</th>
    </tr>
  </thead>
  <tbody>
    
    {data.map((value,index)=>{
        return <tr>
        <td scope="row">{value._id}</td>
        <td>{value.firstname}</td>
        <td>{value.lastname}</td>
        <td>{value.college}</td>
        <td>{value.dob}</td>
        <td>{value.course}</td>
        <td>{value.mobile}</td>
        
        <td>{value.email}</td>
        <td>{value.address}</td>
      </tr>
    })}
    
  </tbody>
</table>

        </div>
    </div>
</div>

    </div>
  )
}

export default Viewall