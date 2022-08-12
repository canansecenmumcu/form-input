import React from 'react'

const List = ({ contacts }) => {
  return (
    <div>
      <h3>Contacts List</h3>
      <ul className="list">
        {contacts.map((contact, i) => (
          <li key={i}>
            <span>{contact.fullname}</span>
            <span>{contact.phone_number}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List;
