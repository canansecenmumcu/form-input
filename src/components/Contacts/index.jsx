import {useState, useEffect } from 'react'
import Form from './Form'
import List from './List'
import "./styles.css"

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname:"canan ",
      phone_number:"123"
    },
    {
      fullname:"furkan",
      phone_number:"456"
    },
    {
      fullname:"efe",
      phone_number:"789"
    },
  ]);

  useEffect(() =>{
    console.log(contacts);
  },[contacts])

  return (
    <div className="container" >
      <h1>Contacts</h1>
      <Form contacts={contacts} addContact={setContacts} />
      <List contacts={contacts}/>
      
    </div>
  )
}

export default Contacts;
