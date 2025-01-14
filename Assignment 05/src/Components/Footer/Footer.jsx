import React from 'react'
import FooterCss from './Footer.module.css'
const Footer = () => {
  return (
    <>
    <div className={FooterCss.main}>
      <div className={FooterCss.lang}>
        <p style={{color:'white'}}>English</p>
        <p>Urdu</p>
        <p>Spanish</p>
        <p>Turkish</p>
      </div>
      <div className={FooterCss.Bmwlist}>
        <ul>
          <li className={FooterCss.headlist}>Quick Links</li>
          <li>BMW in your country</li>
          <li>BMW Group Careers</li>
          <li>REACH Regulation</li>
          <li>Compatibility Check</li>
          <li>Accessories Update</li>
        </ul>

        <ul>
        <li className={FooterCss.headlist}>More BMW Websites</li>
          <li>BMW M</li>
          <li>BMW M Motorsport</li>
          <li>BMW Golfsport</li>
          <li>BMW Welt</li>
          <li>BMW Group Classic</li>
        </ul>

        <ul>
        <li className={FooterCss.headlist}>BMW.com</li>
          <li>About BMW.com</li>
          <li>Contact</li>
          <li>Cookies</li>
          <li>Imprint</li>
          <li>Legal Notice / Data protection</li>
        </ul>

        <ul>
        <li className={FooterCss.headlist}>Visit us on</li>
          <li>Facebook</li>
          <li>X</li>
          <li>youtube</li>
          <li>Instagram</li>
        </ul>
      </div>
      <div className={FooterCss.copyright}>
        <p>&copy; BMW AG 2025</p>
      </div>
    </div>
    </>
  )
}

export default Footer