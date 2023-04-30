import React from 'react'
import fb from './img/fb.svg'
import insta from './img/insta.svg'
import twit from './img/twit.svg'
import linkedin from './img/Linkedin.svg'
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
