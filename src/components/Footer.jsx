import {} from 'react';
import LOGOPRIMEMUSIC from '../assets/icon-nav.svg'
import { FaFacebookSquare, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import '../Scss/Footer.scss'
import line from '../assets/Line-white.svg'


function Footer() {

  return (
    <>
       <footer className='box-footer'>
        <div className='cont-left-footer'>

            <ul className='one-box-footer'>
            <img src={line} alt="" />
                <li className='bold'>My Account</li>
                <li>Overview</li>
                <li>Order History</li>
                <li>Wishlist</li>
                <li>Account information</li>
              </ul>

              <ul className='two-box-footer'>
                <img src={line} alt="" />
                <li className='bold'>Store</li>
                <li>Security Notice</li>
                <li>Location & Hours</li>
                <li>Rentals</li>
                <li>Privacy Notice</li>
              </ul>
        </div>
        
        <div className='cont-right-footer'>
          <div className='logo-footer'>
            <img src={LOGOPRIMEMUSIC} alt="logo-tema"/>
          </div>
          <div className='social'>
            <ul className='icons-footer'>
              <li>
                <FaFacebookSquare /> 
              </li>
              <li>
                <FaInstagram /> 
              </li>
              <li>
                <FaYoutube /> 
              </li>
              <li>
                <FaTwitter /> 
              </li>
            </ul>
          </div>
          
        </div>
       </footer>
       <p>©2021 Music Store</p>
    </>
  );
}
export default Footer;