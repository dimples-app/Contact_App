import React from 'react'

function ContactCard(props) {
  const {id, name, email, phone} = props;
  return (
    <div className='item'>
      <img className='ui avatar img' src={user} alt="user" />
      <div className='content'>
        <div className='header'>{name}</div>
        <div className='header'>{email}</div>
        <div className='header'>{phone}</div>
      </div>
      <i className='trash alternate outline icon' style={{color: 'red', marginTop: "7px"}}></i>
    </div>
  )
}

export default ContactCard