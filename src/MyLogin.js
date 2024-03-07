import React from 'react'
import { Container, Form, Image } from 'react-bootstrap'
import pic from "./images/pic.jpeg"

const MyLogin = () => {

    return (
        <div>
            <Container fluid className='main-container'>
                <div className='img-container'>
                    <Image src={pic} />
                </div>
                <div className='form-content'>
                    <Form>
                        <Form.Control type='text' placeholder='Enter Name'/>
                        <Form.Control type='text' placeholder='Enter Name'/>
                        <button>Login</button>
                    </Form>
                </div>

            </Container>
        </div>
    )
}

export default MyLogin