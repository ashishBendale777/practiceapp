import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-scroll'

const PortfolioNavBar = () => {
    return (
        <>
            <Navbar expand="lg" sticky='top' fixed='top' className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand>Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link>
                                <Link spy={true}
                                    smooth={true}
                                    offset={50}
                                    duration={500} to='home'>Home</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link spy={true}
                                    smooth={true}
                                    offset={50}
                                    duration={500} to='about'>About</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link spy={true}
                                    smooth={true}
                                    offset={50}
                                    duration={500} to='skills'>Skills</Link>

                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default PortfolioNavBar