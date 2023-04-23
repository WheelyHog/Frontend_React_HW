import React from 'react'
import fb from './img/fb.png'
import insta from './img/insta.png'
import twit from './img/twit.png'
import linkedin from './img/Linkedin.png'
import s from './Footer.module.css'

export default function Footer() {
  return (
    <div className={s.footer}>
      <div className={s.social}>
        <img src={fb} alt='facebook' />
        <img src={insta} alt='instagram' />
        <img src={twit} alt='twitter' />
        <img src={linkedin} alt='linkedin' />
      </div>
      <p className={s.copyright}>Copyright ©2020 All rights reserved </p>
    </div>
  )
}
