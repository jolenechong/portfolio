import React from 'react'
import '../App.css'
import {Button } from './Button'
import './HeroSection.css'

export default function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>HELLO</h1>
            <p>I'm jolene, I design and build user interfaces.
Check out my works at WORKS. Based in Singapore, remotely available at jolenechong7@gmail.com</p>
            <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>
                GET STARTED
            </Button>
            <br/>
            <div>
            <span class="categories">.webdesign </span>
            <span class="categories">.javascript </span>
            <span class="categories">.css </span>
            <span class="categories">.html </span>
            <br/><br/>
            <span class="categories">.python </span>
            <span class="categories">.webflow </span>
            <span class="categories">.react native </span>
            </div>
        </div>
    )
}
