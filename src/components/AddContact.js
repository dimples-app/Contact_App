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
        <input 
            type="text"
            name="name"
            placeholder="name"
          />
        </div>
     </form>

    </div>
  )
}

export default AddContact