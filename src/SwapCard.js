import React from 'react'
import "./SwaoCard.css"
import pic from "./images/pic.jpeg"
import { FaInstagramSquare, FaFacebook, FaGithub } from 'react-icons/fa'

const SwapCard = () => {
    return (
        <div className='sawp-container'>
            <div className='swap-card'>
                <div className='swap-card-container'>
                    <div className='card-face front-face'>
                        <img src={pic} alt="pic" />
                        <h2>Ashish Bendale</h2>
                        <h3>Full Stack Developer</h3>
                    </div>
                    <div className='card-face back-face'>
                        <div className='swap-card-about'>
                            <h2>About Me</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis quidem labore voluptatum ipsum provident nihil
                                temporibus dolorem inventore nulla tenetur excepturi explicabo nesciunt, impedit voluptate quasi? Tenetur beatae
                                facere saepe.</p>
                            <div className='row'>
                                <FaInstagramSquare className='ig' />
                                <FaFacebook className='fb' />
                                <FaGithub className='git' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='swap-card'>
                <div className='swap-card-container'>
                    <div className='card-face front-face'>
                        <img src={pic} alt="pic" />
                        <h2>Ashish Bendale</h2>
                        <h3>Full Stack Developer</h3>
                    </div>
                    <div className='card-face back-face'>
                        <div className='swap-card-about'>
                            <h2>About Me</h2>
                            <p>ahsdasdasjdb asd asjda sdajsda sdabjd</p>
                            <div className='row'>
                                <FaInstagramSquare className='ig' />
                                <FaFacebook className='fb' />
                                <FaGithub className='git' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className='swap-card'>
                <div className='swap-card-container'>
                    <div className='card-face front-face'>
                        <img src={pic} alt="pic" />
                        <h2>Ashish Bendale</h2>
                        <h3>Full Stack Developer</h3>
                    </div>
                    <div className='card-face back-face'>
                        <div className='swap-card-about'>
                            <h2>About Me</h2>
                            <p>ahsdasdasjdb asd asjda sdajsda sdabjd</p>
                            <div className='row'>
                                <FaInstagramSquare className='ig' />
                                <FaFacebook className='fb' />
                                <FaGithub className='git' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default SwapCard