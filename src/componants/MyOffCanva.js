import React, { useState } from 'react'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { FaBars } from "react-icons/fa"
import { Link } from 'react-router-dom'

const MyOffCanva = () => {
    const [isShow, setisShow] = useState(false)

    const handleShow = () => { setisShow(true) }
    const handlehide = () => { setisShow(false) }

    return (
        <>
            <Navbar expand="lg" sticky='top' fixed='top' className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand>
                        <FaBars onClick={() => handleShow()} size={30} color='#fff' />
                        Portfolio</Navbar.Brand>
                    {/*  */}
                </Container>
            </Navbar >
            <Offcanvas placement='start' show={isShow} onHide={handlehide}>
                <Offcanvas.Header closeButton>
                    Header
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="flex-column">
                        <Nav.Link onClick={() => handlehide()}>
                            <Link to="/">Home</Link>
                        </Nav.Link>
                        <Nav.Link onClick={() => handlehide()}>
                            <Link to="/about">About</Link>
                        </Nav.Link>
                        <Nav.Link onClick={() => handlehide()}>
                            <Link to="/skills">Skills</Link>
                        </Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>

        </>
    )
}

export default MyOffCanva