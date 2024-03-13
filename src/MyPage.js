import React from 'react'
import "./MyPage.css"
import { Form } from 'react-bootstrap'

const MyPage = () => {
  return (
    <div className='main-container'>
      
      <div className='form-container'>
      <h1>Ashish</h1>
        <Form>
          <Form.Control className='form-input' type='text' placeholder='Enter Name' />
          <Form.Control className='form-input' type='Email' placeholder='Enter Mail' />
          <Form.Control className='form-input' type='Password' placeholder='Enter Password' />
          <button>Login</button>
        </Form>
      </div>

    </div>
  )
}

export default MyPage