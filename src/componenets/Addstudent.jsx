import React, { useState } from 'react'
import Navbar from './Navbar'

const Addstudent = () => {

    const [data,changeData]=useState(

      {

        "name":"",
        "last":"",
        "col":"",
        "dob":"",
        "cour":"",
        "mob":"",
        "email":"",
        "addr":"",
        

      }

    )

const inputHandler=(event)=>{

    changeData({...data,[event.target.name]:event.target.value})
}

const readValue=()=>{
    console.log(data)
}

  return (
    <div>
<Navbar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="row g-3">
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form label">First Name</label>
<input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

    <label htmlFor="" className="form label">Last Name</label>
    <input type="text" className="form-control" name='last' value={data.last} onChange={inputHandler}/>

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    <label htmlFor="" className="form label">College</label>
    <input type="text" className="form-control" name='col' value={data.col} onChange={inputHandler}/>

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

    <label htmlFor="" className="form label">Date Of Birth</label>
    <input type="date" name="dob" id="" className="form-control" value={data.dob} onChange={inputHandler} />

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    <label htmlFor="" className="form label">Cource</label>
    <select name="cour" id="" className="form-control" value={data.cour} onChange={inputHandler}>
        <option value="Mca">Mca</option>
        <option value="Mba">Mba</option>
        <option value="Mtech">Mtech</option>
        <option value="Btech">Btech</option>
    </select>

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

    <label htmlFor="" className="form label">Mobile No</label>
    <input type="text" className="form-control" name='mob' value={data.mob} onChange={inputHandler}/>

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

    <label htmlFor="" className="form label">Email</label>
    <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

    <label htmlFor="" className="form label">Address</label>
    <textarea name="addr" id="" className="form-control" value={data.addr} onChange={inputHandler}></textarea>

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


<button className="btn btn-success" onClick={readValue}>Submit</button>

    </div>
</div>

        </div>
    </div>
</div>


    </div>
  )
}

export default Addstudent