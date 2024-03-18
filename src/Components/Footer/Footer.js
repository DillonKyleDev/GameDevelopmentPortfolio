import React from 'react';
import './_footer.scss';
import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';

function Footer() {

  return (
    <div>
      <div className='footer'>
        <div className='footer-content'>
          <p className='footer-links'>
            <a href="https://github.com/DillonKyleDev" className="footer-link" target="_blank" rel="noreferrer" alt="GitHub Profile">
              <BsGithub  
              size={30} 
              className="footer-icon"/>
              Github
            </a>
            <a href="https://www.linkedin.com/in/dillon-k-387700213/" className="footer-link" target="_blank" rel="noreferrer" alt="LinkedIn Profile">
              <AiFillLinkedin 
              size={30}
              className="footer-icon"/>
              LinkedIn
            </a>
          </p>

          <div className='footer-bar'></div>

          <div className='footer__copyright'>
            <p>DK Web Solutions<span class="material-symbols-sharp copyright-symbol">copyright</span></p>   
            <p>2021 - 2023</p>       
          </div>
          <p className='small-text'>Made with React.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer