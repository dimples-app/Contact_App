import React from 'react'

function AddContact() {
  return (
    <div>

      <form className='ui-form'>
        <h1>AddContact</h1>
        <div className='field'>
          <label>Name</label>
          <input 
            type="text"
            name="name"
            placeholder="name"
          />
        </div>

        <div>
        <label>Email</label>
        <input 
            type="text"
            name="Email"
            placeholder="Email"
          />
        </div>

        <div>
        <label>Phone</label>
        <input 
            type="text"
            name="Phone"
            placeholder="Phone"
          />
        </div>
     </form>

    </div>
  )
}

export default AddContact