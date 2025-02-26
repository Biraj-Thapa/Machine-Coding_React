import React from 'react'
import "../App.css"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const ContactList = ({contact,removeContact}) => {
    const contactList=contact.map(val=>{
        return(
            <div className='detail' key={val.id}>
                <div>{val.data.name}</div>
                <div>{val.data.email}</div>
                <span onClick={()=>removeContact(val.id)}><DeleteForeverIcon /></span>
            </div>
        )
    })
  return (
    
    <div>
        <div>
            Contact List
        </div>
        <div className='display'>{contactList}</div>
    </div>
  )
}

export default ContactList