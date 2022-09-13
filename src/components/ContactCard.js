import React from 'react'

function ContactCard(props) {
  const {id, name, email, phone} = props;
  return (
    <div className='item'>
      <div className='content'>
        <div className='header'>{name}</div>
        <div className='header'>{email}</div>
      </div>
    </div>
  )
}

export default ContactCard