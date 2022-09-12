import React, {useState} from 'react'


function AddContact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleNameChange = ( event) => {
    setName(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }
 
  const handlePhoneChange = (event) => {
    setPhone(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted', name, email, phone)
  }
  return (
    <div>

      <form className='ui-form' onSubmit={handleSubmit}>
        <h1>AddContact</h1>
        <div className='field'>
          <label>Name</label>
          <input 
            type="text"
            name="name"
            placeholder="name"
            onChange={handleNameChange}
            value={name}
          />
        </div>

        <div>
        <label>Email</label>
        <input 
            type="text"
            name="Email"
            placeholder="Email"
            onChange={handleEmailChange}
            value={email}
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

        <div>
          <button type='submit' className='ui button'> Add </button>
        </div>
     </form>

    </div>
  )
}

export default AddContact