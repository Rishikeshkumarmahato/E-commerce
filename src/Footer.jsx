import React from 'react'
import './Footer.css';
import facebook from './assets/facebook.png'
import instagram from './assets/instagram.avif'
import pinterest from './assets/pinterest.png'
import twitter from './assets/twitter.webp'
import youtube from './assets/youtube.png'
const Footer = () => {
  return (
    <>
    <div className='fSection'>
        <div className='fItems'>
            <h1>Shop</h1>
            <ul>
                <li>Kits</li>
                <li>Shipping</li>
                <li>Returns</li>
                <li>StockLists</li>
                <li>Private Workshops</li>
                <li>Wholesale</li>
            </ul>
        </div>
        <div className='fItems'>
            <h1>About</h1>
            <ul>
                <li>Our Story</li>
                <li>Blog</li>
                <li>Jobs</li>
                <li>Privacy Policy</li>
                <li>Terms and Conditions</li>
                <li>Accesibility Assesment</li>
            </ul>
        </div>
        <div className='fItems'>
            <h1>Help</h1>
            <ul>
                <li>Tutorial</li>
                <li>Office hour</li>
                <li>FAQ</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div className='fItems'>
            <h1>Stay in the loop</h1>
            <div className='subscribe'>
                <input type="text"  placeholder='Email Address'/>
                <button>Subscribe</button>
            </div>
        </div>
    </div>
    <div className='connect'>
        <h1>Connect With Us</h1>
        <div className='social_media'>
            <img src={facebook} />
            <img src={instagram} />
            <img src={pinterest} />
            <img src={twitter} />
            <img src={youtube} />
        </div>
        <p>©2024, BazaarHaven <br />
        411 Emissary Drive #108 Cary, NC 27519</p>
    </div>
    </>
  )
}

export default Footer