import React, { useState } from "react";
import "../App.css";

const AddContacts = ({addContact}) => {

    const [contactData,setContactData]=useState({name:"",email:""})

    const handleChange=(e)=>{
        if(e.target.name==="name"){
            setContactData({...contactData,name:e.target.value})
        }
        else{
            setContactData({...contactData,email:e.target.value})
        }
    }

    const handleAdd=()=>{
        if(contactData.name=== "" || contactData.email===""){
            alert("Please fill all the details")
            return
        }
        addContact(contactData)
        setContactData({name:"",email:""})
    }
  return (
    <div>
      <div className="contact">Add Contacts:</div>
      <form>
        <label>Name : </label>
        <br />
        <input type="text" placeholder="Enter Your Name" name="name" value={contactData.name} onChange={handleChange}/>
        <br />
        <br />
        <label>Email : </label>
        <br />
        <input type="email" placeholder="Enter Your Email" name="email" value={contactData.email} onChange={handleChange} />
      </form>
      <button className="btn" onClick={handleAdd}>Add Contact</button>
    </div>
  );
};

export default AddContacts;
